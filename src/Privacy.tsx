import './App.css'

export function Privacy() {
  return (
    <>
      <a className='pb-0 text-xl color-white font-bold' href="/">ADOSE</a>
      <p className=''>
        Privacy Policy
      </p>
      <PrivacyContent />
      <div className="card gap-2 flex">
        <a className='w-[200px] rounded-xl p-3 bg-[#dedede]' href="/terms">
          Terms of Service
        </a>
        <a className='w-[200px] rounded-xl p-3 bg-[#efef]' href="/privacy">
          Privacy
        </a>
      </div>
    </>
  )
}

function PrivacyContent() {
  return (
    <div className='text-left'>
      <br />
      <h3 className='font-bold text-xl pb-2'>
        1. Introduction
      </h3>
      <p>
        Welcome to ADOSE, a service provided by GenuisApp Ltd. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your data when you use our app.
      </p>
      <br />
      <h3 className='font-bold text-xl pb-2'>
        2. Information We Collect
      </h3>
      <h4>
        a.{' '}
        <strong>
          Personal Information
        </strong>
      </h4>
      <ul>
        <li>
          <strong>
            Account Information
          </strong>
          : When you sign up for ADOSE, we collect your name, email address, and other account-related details.
        </li>
        <li>
          <strong>
            Profile Information
          </strong>
          : You may choose to provide additional information like your age, location, and profile picture.
        </li>
        <li>
          <strong>
            Contact Information
          </strong>
          : We may collect your contact details if you interact with our customer support.
        </li>
      </ul>
      <h4>
        b.{' '}
        <strong>
          Usage Data
        </strong>
      </h4>
      <ul>
        <li>
          <strong>
            App Activity
          </strong>
          : We collect information about your interactions with the app, including challenges you complete, your engagement with other users, and your app preferences.
        </li>
        <li>
          <strong>
            Device Information
          </strong>
          : We collect details about the device you use to access ADOSE, such as the device type, operating system, and IP address.
        </li>
      </ul>
      <h4>
        c.{' '}
        <strong>
          Location Data
        </strong>
      </h4>
      <ul>
        <li>
          We may collect and process information about your location if you enable location services on your device. This allows us to provide location-based features and personalized content.
        </li>
      </ul>
      <h4>
        d.{' '}
        <strong>
          Third-Party Information
        </strong>
      </h4>
      <ul>
        <li>
          <strong>
            Google ML Kit
          </strong>
          : We use Google ML Kit to process images, text, and other content within the app. Data shared with Google ML Kit is processed to provide personalized features and improve user experience.
        </li>
        <li>
          <strong>
            Google Cloud Services
          </strong>
          : Your personal information and app activity data are stored and managed on Google Cloud Services to ensure secure and reliable operations.
        </li>
      </ul>
      <br />
      <h3 className='font-bold text-xl pb-2'>
        3. How We Use Your Information
      </h3>
      <h4>
        a.{' '}
        <strong>
          To Provide and Improve Our Services
        </strong>
      </h4>
      <ul>
        <li>
          We use your information to operate and enhance the functionality of ADOSE, including personalizing challenges, connecting you with other users, and improving app performance.
        </li>
      </ul>
      <h4>
        b.{' '}
        <strong>
          To Communicate with You
        </strong>
      </h4>
      <ul>
        <li>
          We may use your contact information to send you important updates, notifications, and promotional messages related to ADOSE. You can opt out of promotional communications at any time.
        </li>
      </ul>
      <h4>
        c.{' '}
        <strong>
          To Ensure Security
        </strong>
      </h4>
      <ul>
        <li>
          We use your data to monitor for suspicious activity and to protect against fraud, abuse, and other harmful behavior.
        </li>
      </ul>
      <h4>
        d.{' '}
        <strong>
          To Comply with Legal Obligations
        </strong>
      </h4>
      <ul>
        <li>
          We may process your information to comply with legal obligations, resolve disputes, and enforce our agreements.
        </li>
      </ul>
      <br />
      <h3 className='font-bold text-xl pb-2'>
        4. Data Sharing and Disclosure
      </h3>
      <h4>
        a.{' '}
        <strong>
          With Third-Party Service Providers
        </strong>
      </h4>
      <ul>
        <li>
          <strong>
            Google ML Kit
          </strong>
          : We share relevant data with Google ML Kit to enable machine learning features such as text recognition and face detection.
        </li>
        <li>
          <strong>
            Google Cloud Services
          </strong>
          : User data is stored and managed securely using Google Cloud Services.
        </li>
        <li>
          <strong>
            React Native
          </strong>
          : React Native facilitates the communication and integration of app features across platforms.
        </li>
      </ul>
      <h4>
        b.{' '}
        <strong>
          With Legal Authorities
        </strong>
      </h4>
      <ul>
        <li>
          We may disclose your information if required by law, or if we believe in good faith that such disclosure is necessary to comply with legal obligations, protect our rights, or prevent harm.
        </li>
      </ul>
      <h4>
        c.{' '}
        <strong>
          In Business Transfers
        </strong>
      </h4>
      <ul>
        <li>
          In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction. We will notify you of any such changes.
        </li>
      </ul>
      <br />
      <h3 className='font-bold text-xl pb-2'>
        5. Data Security
      </h3>
      <h4>
        a.{' '}
        <strong>
          Security Measures
        </strong>
      </h4>
      <ul>
        <li>
          We implement a variety of security measures, including encryption, access controls, and regular security audits, to protect your personal information from unauthorized access, alteration, or disclosure.
        </li>
      </ul>
      <h4>
        b.{' '}
        <strong>
          Data Retention
        </strong>
      </h4>
      <ul>
        <li>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </li>
      </ul>
      <br />
      <h3 className='font-bold text-xl pb-2'>
        6. Your Rights and Choices
      </h3>
      <h4>
        a.{' '}
        <strong>
          Access and Correction
        </strong>
      </h4>
      <ul>
        <li>
          You have the right to access and update your personal information at any time through the app's settings.
        </li>
      </ul>
      <h4>
        b.{' '}
        <strong>
          Data Deletion
        </strong>
      </h4>
      <ul>
        <li>
          You can request the deletion of your personal information by contacting our support team. We will process your request in accordance with applicable laws.
        </li>
      </ul>
      <h4>
        c.{' '}
        <strong>
          Opt-Out of Communications
        </strong>
      </h4>
      <ul>
        <li>
          You may opt out of receiving promotional messages from ADOSE by following the instructions in the messages or by adjusting your notification settings in the app.
        </li>
      </ul>
      <h4>
        d.{' '}
        <strong>
          Location Services
        </strong>
      </h4>
      <ul>
        <li>
          You can control the app’s access to your location data through your device’s settings. Disabling location services may limit certain features of the app.
        </li>
      </ul>
      <br />
      <h3 className='font-bold text-xl pb-2'>
        7. Children's Privacy
      </h3>
      <p>
        ADOSE is not intended for use by children under the age of 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
      </p>
      <br />
      <h3 className='font-bold text-xl pb-2'>
        8. Changes to This Privacy Policy
      </h3>
      <p>
        We may update this Privacy Policy from time to time. When we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide additional notice (e.g., a statement within the app). Your continued use of the app after the changes have been made will constitute your acceptance of the revised policy.
      </p>
      <br />
      <h3 className='font-bold text-xl pb-2'>
        9. Contact Us
      </h3>
      <p>
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
      </p>
      <p>
        GenuisApp Ltd
        <br />
        444 Alaska Avenue
        <br />
        Suite #EZ268
        <br />
        Torrance, CA 90503
        <br />
        USA
      </p>
    </div>
  )
}
