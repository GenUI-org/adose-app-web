### Tại sao lại dùng Firebase và React Native
- Build cho nhiều môi trường
- Firebase miễn phí, nhiều tính năng, rất thích hợp build app
### Chuẩn bị:
Khởi tạo project, dùng React native, Typescript.
Các pakage được dùng là
- react-native-firebase
- react-native-web

Tạo Project trên Firebase
- bật Authentication: Thêm các provider cho việc đăng nhập. Ví dụ trong bài sẽ dùng Apple
- Firestore: Thông tin user dùng trong app sẽ lưu vào Collection Users trong Firestore, ví dụ: username, age, gender... Firestore cần được set permission truy cập (chi tiết xem thêm trong bài)
- Tạo App trong Firebase Setting, Download các file sau:
	- `GoogleService-Info.plist` cho bản Apple App
	- `google-services.json` cho app Android
	
### Implement
Tạo file theo cấu trúc thư mục như sau:
- App.tsx
- context/
	- AuthProvider.tsx
- hooks/
	- useUserCredential.tsx
- screens/
	- Login.tsx
	- Home.tsx
- services/
	- Firebase/
		- users/
			- index.ts
			- management.ts
			- management.native.ts
			- management.web.ts
	- utils.ts

**Chú thích cho từng thành phần trong cây thư mục:**

- App.tsx: đây là Root component của app. Tại đây chúng ta sẽ wrap ContextProvider cho Các Router, nơi chứa các Screen như Login, Home và business để kiểm tra có dữ liệu User hay không, từ đó load các màn hình tương ứng.
- Thông tin user được lưu trong React Context (AuthProvider.ts). Nơi đây chứa context và reducers để update lại thông tin user sau khi có dữ liệu từ Firebase trả về
- hooks: Đối với các thông tin user cần dùng cho việc hiển thị lên UI và xử lý logic trong các Component, chúng ta có custom hook `useUserCredential.ts` trả về các thông tin này.
- screens: Nơi chứa các màn hình cho việc hiển thị UI
	- Login.tsx: Màn hình Đăng nhập với một nút duy nhất là Login By Apple. Khi User nhấn vào nút này App sẽ chuyển sang đăng nhập vào tài khoản trên iPhone
	- Home.tsx: Việc đăng nhập thành công, dữ liệu từ phía Apple được Firebase Authentication ghi nhận và trả về cho App, chúng ta sẽ xử lý dữ liệu này rồi hiển thị màn hình Home
- services: Thư mục chỉ chứa các business được thực hiện trong app, độc lập với UI. Ngoài việc để hiển thị dữ liệu trên Native app, chúng ta còn xử lý để hiện thị trên Web. Do đó sẽ có thêm các file được tách riêng cho từng môi trường:
	- Với file có đuôi `.web.ts` dành cho phiên bản web, 
	- Với file có đuôi `.native.ts` dành cho cả bản iOS và bản Android
- services/utils.ts: Tập hợp cái function dành cho việc xử lý data trong services. Đây là các pure functions. Giới hạn của nó nằm trong khu vực chứa các service của app.

**Luồng đăng nhập**

Vào App
- khi User chưa đăng nhập => Màn hình Login => Nhấn đăng nhập bằng Apple => Thực hiện đăng nhập trên iphone => 
	- Tìm kiếm user dựa theo tài khoản: 
		- Nếu User chưa có => Tạo User mới => Tiếp tục
		- Nếu User đã có => Lấy thông tin User hợp lệ => Tiếp tục
		- Nếu User đã có và không hợp lệ => Báo lỗi
	- Quay lại App lưu thông tin đăng nhập vào Context => Chuyển tới màn hình Home nếu User hợp lệ, Chuyển tới màn hình lỗi nếu User không hợp lệ
- Khi User đã đăng nhập: Vào app => kiểm tra dữ liệu User mới nhất
		- Nếu User chưa có => Tạo User mới => Tiếp tục
		- Nếu User đã có => Lấy thông tin User hợp lệ => Tiếp tục
		- Nếu User đã có và không hợp lệ => Báo lỗi

# Start building

### Setup Context Provider
App có thể chứa nhiều Context provider phục vụ các mục đích khác nhau, ví dụ setting theme, thông tin authenticate. Cần tạo file index cho các Provider 

```
export function AppContextProvider({ children }: { children: React.ReactNode }): JSX.Element {

return (
	<AppConfigProvider>
		<AuthProvider>
			{children}
		</AuthProvider>
	</AppConfigProvider>
)

}
```

AppConfigProvider là ví dụ cho các context khác, ở đây không bàn tới
Tạo file AuthProvider.tsx có nội dung như sau

```
type LoginAction = {
	type: 'LOGIN',
	user: User
}

type LogoutAction = {
	type: 'LOGOUT'
}

type ChangeAction = {
	type: 'CHANGE',
	user: User
}

type OnUserChangedAction = {
	type: 'OnUserChangedAction',
	user: User
}

type AuthDispatchAction = LoginAction | LogoutAction | ChangeAction | OnUserChangedAction

export type AuthContextState = User | null
export const AuthContext = createContext<AuthContextState>(null);
export const AuthDispatchContext = createContext<Dispatch<AuthDispatchAction> | null>(null)
export function authReducer(preAuthState: AuthContextState, action: AuthDispatchAction): AuthContextState {

switch (action.type) {
	case 'LOGIN':
	case 'CHANGE':
		return action.user
	case 'OnUserChangedAction':
		return action.user;
	case 'LOGOUT':
		return null
	default:
		throw Error('Unknown action: ' + JSON.stringify(action));
	}
}

export function AuthProvider({ children }: PropsWithChildren<any>) {

const [initializing, setInitializing] = useState(true);
const [authState, authDispatch] = useReducer<Reducer<AuthContextState, AuthDispatchAction>>(
authReducer,
defaultUserState,
)

const handleAuthStateChanged = useCallback(async (user: FirebaseAuthUser | null) => {
	if (!user) {
		authDispatch({
			type: 'LOGOUT'
		})
	} else {
		const authUser = await getAuthenticatedUser(user.uid);
		if(authUser)
			authDispatch({
				type: 'CHANGE',
				user: authUser,
			});
	}
	if (initializing) {
		setInitializing(false);
	}
}, [initializing])

useEffect(() => {
	...
}, [])

return (
		<AuthContext.Provider value={authState}>
			<AuthDispatchContext.Provider value={authDispatch}>
			{!initializing && children}
			</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	)
}
```

Cần chú ý ở đây là trong useEffect sẽ gọi tới service `onAuthStateChanged` cập nhật sự thay đổi state, khi app nhận được thông tin User sẽ gọi các `reducer` cập nhật lại context:

Thêm vào useEffect như sau:

```
import { onAuthStateChanged } from "../services/Firebase/users/userManagement";

...

useEffect(() => {
	return onAuthStateChanged(handleAuthStateChanged);
}, [handleAuthStateChanged])

```

### Setup Firebase service

Trong thư mục `services/Firebase/users/` chúng ta sẽ tạo 3 file:
	- `userManagement.ts` Chứa các interface để gọi function từ bên ngoài. Giúp định nghĩa kiểu để các hook/service khác có thể hiểu được. 
	  Tại đây khai báo `onAuthStateChanged` như đề cập bên trên
	- `userManagement.native.ts` và `userManagement.web.ts` implement `onAuthStateChanged` cho từng môi trường. Web và App dùng các thư viện khác nhau nên không thể dùng chung một source code.

Hãy xem tiếp dưới đây:

Bước đầu Khai báo Interface cho userManagement tại file `userManagement.ts`. Khi thông tin User được cập nhật Firebase App sẽ gọi tới function này, trả về một callback với thông tin User để xử lý tiếp: 

```
interface UserManagement {
	onAuthStateChanged: <T>(callback: (user: T) => void) => () => void;
	
	// others function
	getUserByDevice: () => Promise<User | undefined>; // Replace 'any' with the actual return type
	getUserById: (userId: string) => Promise<User | undefined>; // Replace 'any' with the actual return type
	updateUser: (userId: string, userData: any) => Promise<void>; // Replace 'any' with the actual user data type
	subscribeOnUserChanged: (userId: string, callback: (user: User | undefined) => void) => () => void;
	signOut: () => Promise<void>;
	getCurrentUser: () => Promise<User | undefined>;
	signInWithCredential: <T, G>(credential: T) => Promise<G>;
	signInAnonymously: <T>() => Promise<T>;
}
```

Tiếp theo cần định nghĩa nơi chúng ta gọi function 
Vẫn tại file `userManagement.ts` thêm:

```
const userManagement = Platform.select({
	web: () => require('./userManagement.web'),
	default: () => require('./userManagement.native'),
});

export const {
	onAuthStateChanged,
	
	// getUserByDevice,
	// getUserById,
	// updateUser,
	// subscribeOnUserChanged,
	// signOut,
	// getCurrentUser,
	// signInWithCredential,
	// signInAnonymously
} = userManagement as UserManagement;
```

phiên bản `userManagement.native.ts` dùng package `@react-native-firebase/auth`còn bản web gọi tới thư viện `firebase/auth`  để gọi tới function `onAuthStateChanged`. 

Hàm này có nhiệm vụ:

* Listen for changes in the users auth state (logging in and out).
* This method returns a unsubscribe function to stop listening to events.
* Always ensure you unsubscribe from the listener when no longer needed to prevent updates to components no longer in use.

userManagement.native.ts
```
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

export type FirebaseAuthUser = FirebaseAuthTypes.User;
export function onAuthStateChanged(callback: (user: FirebaseAuthUser | null) => void): () => void {
	return auth().onAuthStateChanged(callback);
}
```

Bản native cần cấu hình file `GoogleService-Info.plist` cho bản Apple App và / hoặc`google-services.json` cho app Android là có thể hoạt động.

userManagement.web.ts
```
import { auth, db } from '../config';

export type FirebaseAuthUser = FirebaseUser;

export function onAuthStateChanged(
	callback: (user: FirebaseAuthUser | null) => void
): () => void {
	return auth.onAuthStateChanged(callback);
}
```

Khác với bản Native, phiên bản web cần có config để có thể gọi tới Firebase thông qua hàm `initializeAuth`. Do đó chúng ta cần thêm file config tới service firebase như sau:

Folder Structure:
```
...
services/
	Firebase/
	   config/
		   index.ts
		   index.native.ts
		   index.web.ts
		users/
			index.ts
			userManagement.ts
			userManagement.native.ts
			userManagement.web.ts
```

Tương tự như file `userManagement.ts`. File `index.ts` cho firebase config chỉ cần export ra các functions từ web và native.

config/index.ts
```
import { Platform } from "react-native";

const app = Platform.select({
	web: require('./index.web'),
	default: require('./index.native'),
});

export const { auth, firebaseApp } = app;
```

Các file trong config chủ yếu phục vụ cho Firebase trên web, do đó nội dung trong `index.native.ts` không cần trả về data gì.

config/index.native.ts
```
let firebaseApp
let db
let auth
let analytics

export { analytics, auth, db, firebaseApp };
```

file `index.web.ts` chứa các logic chính để chúng ta có thể gọi được tới các dịch vụ của Firebase trên web. Nội dung file như sau:

config/index.web.ts
```
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';

// Firebase JS SDK work with expo web
// for more information: https://docs.expo.dev/guides/using-firebase/#using-firebase-js-sdk

// Initialize Firebase
const firebaseConfig = {
	apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
	// databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
	projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let firebaseApp: ReturnType<typeof initializeApp>;
let auth: ReturnType<typeof initializeAuth>;

try {
	firebaseApp = initializeApp(firebaseConfig);
	auth = initializeAuth(firebaseApp);
	auth.useDeviceLanguage();
} catch (error) {
	console.error("Error initializing Firestore:", (error as any).message);
	console.error("Error Stack:", (error as any).stack);
	console.error("Error Details:", error);
}

export { auth, firebaseApp };

// To apply the default browser preference instead of explicitly setting it.
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
```

Trong đó có thể thấy

```
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
```
- `firebase/app` và `firebase/auth` là Firebase JS SDK phát hành riêng
*TODO: Cập nhật từ blog của Firebase thêm giải thích cho phần này*

- `firebase/app` và `firebase/auth` là các package dependencies của `@react-native-firebase/app`. 
- **Không cần cài đặt và có thể gọi trực tiếp** 
- Nếu cố gắng chạy *manually install* cho các package này sẽ gặp lỗi:
```
RNFNFirestoreDocumentModule.getDocument got 4 arguments, expected 2
```

Lỗi gặp phải do conflict version giữa `Firebase JS SDK` và *Firebase JS SDK* là dependency của`@react-native-firebase`.

```
const firebaseConfig = {
	apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
	// databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
	projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
```
1) Quay trở lại Firebase Config trong Google Console, tạo thêm App mới cho Web. 
2) Firebase sẽ gửi cho bạn Config JS SDK. 
3) Các config hãy thêm vào file `.env` của project. Trong ví dụ tôi đang sử dụng `Expo` nên các env có tiền tố `EXPO_PUBLIC_`. Bạn có thể dùng thư viện như `react-native-dotenv` để quản lý các env này.

`` *vậy là xong*! `` Đặt một đoạn code `console.log()` vào trong callback `handleAuthStateChanged` trong file `AuthProvider.tsx` để kiểm tra dữ liệu trả về. Phần tiếp theo tôi sẽ quay trở lại với mục Login.
 
 