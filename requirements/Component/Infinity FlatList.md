### User Story

**Title:** Display and Navigate Through Categories and Items

**As a** user,  
**I want** to view and interact with a list of categories and their respective items,  
**so that** I can easily navigate and access the data I need.

#### Acceptance Criteria:

1. **Category and Item Display:**
    
    - Two flatlists are available: one for categories and one for items.
    - Categories and items can be styled with custom designs.
2. **Category Interaction:**

    - Clicking a category sets it to active mode.
    - The item list automatically scrolls to the first item of the selected category.
4. **List Initialization:**
    
    - On initialization, the list scrolls to the last saved item position or a specified item index.
    - All categories are pre-loaded.
    - Each category pre-loads approximately 10 items, with an option to pre-load the entire list.
4. **Infinite Loading and Pagination:**
    
    - Define the number of viewable items based on screen and container size.
    - Maintain a Viewable List that updates as the list is scrolled.
    - Categories switch to active mode based on the first item in the Viewable List.
    - Load subsequent items in batches of 10 when nearing the end of the list.
    - Automatically load items from the next category when scrolling to the start or end of the list.
    - If at the last category, continue loading from the first category, and vice versa.

#### Potential User Story Extensions:

1. **Custom Sorting and Filtering:**
    
    - **As a** user,  
        **I want** to sort and filter items within a category,  
        **so that** I can find specific data more efficiently.
2. **Search Functionality:**
    
    - **As a** user,  
        **I want** to search for items across all categories,  
        **so that** I can quickly locate specific items.
3. **Bookmarking and Saving:**
    
    - **As a** user,  
        **I want** to bookmark or save specific items,  
        **so that** I can easily return to them later.
4. **Category and Item Details:**
    
    - **As a** user,  
        **I want** to view detailed information about a category or item,  
        **so that** I can understand more about the data presented.
5. **Offline Access:**
    
    - **As a** user,  
        **I want** to access previously loaded categories and items offline,  
        **so that** I can view data without an internet connection.

**As a user, I want to control the initial loading and scrolling behavior of the list so that I can personalize my browsing experience.**

**Details:**

- I want the option to pre-load all categories and a certain number of items per category for faster browsing.
- I want the ability to pre-load the entire list if I prefer.
- I want the list to automatically scroll to the last viewed item position or a specific item index upon initialization.

**Acceptance Criteria:**

- The app provides settings to control the number of pre-loaded categories and items.
- The app allows users to pre-load the entire list.
- The app remembers and restores the last viewed item position or scrolls to a specified item index upon initialization.

**As a user, I want to have a visually appealing and customizable browsing experience.**

**Details:**

- I want the ability to customize the styling of categories and items in the list.
- I want the active category to be visually distinct from other categories.
- I want smooth and seamless transitions when scrolling between categories and loading new items.

**Acceptance Criteria:**

- The app provides options to customize the appearance of categories and items.
- The active category is clearly highlighted and easily identifiable.
- Scrolling and loading animations are smooth and visually appealing.

---------
*Prompt*
## Usage
- Nhiều Category, trong mỗi Category lại có nhiều data items. 
	- Tạo thành 2 flatlist: 1) hiển thị category, 2) hiển thị danh sách item
	- Cho phép custom style của các category và Item
- Khi nhấn vào category, các category này chuyển sang active mode và tự động chuyển tới vị trí item đầu tiên thuộc category đó.
- Giai đoạn khởi tạo danh sách:
	- List tự động chuyển tới vị trí item lần cuối lưu lại trong danh sách hoặc index item muốn chuyển tới
	- Cho phép Load trước tất cả các category
	- Mỗi Category load trước một lượng Items nhất định khoảng 10 items. Cho phép tuỳ chọn load trước cả list 
- Muốn tạo list Infinity loading kết hợp pagination: 
	- Viewable Items Number: Định nghĩa số item có thể hiển thị dựa trên kích thước màn hình, kích thước container, khoảng cách giữa các item
	- Viewable List: lấy danh sách các item hiển thị trong vùng xem được. Mỗi khi scroll danh sách Items cập nhật lại Viewable List
		- Khi vuốt items category tự động chuyển sang chế độ active
		- Caterogy active dựa theo item đầu tiên của Viewable List
	- Các item sau sẽ load pagination 10 items một lần mỗi khi kéo đến Offset gần cuối của Container
	- Khi kéo về đầu list hoặc cuối list tự động load data items của category tiếp theo
		- Nếu là Category cuối cùng thì load tiếp là các Item của Category đầu tiên
		- Nếu đang ở Category đầu tiên: Kéo về trước Load lại Item của category cuối cùng

----------------
## Usage

- Multiple Categories, each containing several data items.
    - Create two flatlists: 
	    1) to display categories
	    2) to display the list of items.
    - Allow custom styling for categories and items.
- When a category is clicked, it switches to active mode and automatically scrolls to the first item of that category.
- During the list initialization phase:
    - The list automatically scrolls to the last saved item position or the desired item index.
    - Allow pre-loading of all categories.
    - Each category pre-loads a certain number of items, about 10 items. Option to pre-load the entire list.
- To create an infinite loading list combined with pagination:
    - Viewable Items Number: Define the number of items that can be displayed based on screen size, container size, and spacing between items.
    - Viewable List: Get the list of items visible in the viewable area. Each time the list is scrolled, update the Viewable List.
        - When scrolling, categories automatically switch to active mode.
        - Active category is based on the first item of the Viewable List.
    - Subsequent items will load in pagination, 10 items at a time, when scrolling near the end of the container.
    - When scrolling to the start or end of the list, automatically load data items of the next category.
        - If it's the last category, continue loading items from the first category.
        - If it's the first category: Scrolling back loads items from the last category.