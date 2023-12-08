# MOODY_FOODIE
A React Native applicaton to assist users with finding nearby restraunts

![MF_Login](https://github.com/forbesw17/MOODY_FOODIE/assets/122941813/4ee30b0a-1de4-4bbd-87b4-41bae545d67d) ![MF_Home](https://github.com/forbesw17/MOODY_FOODIE/assets/122941813/5590175a-d929-4faa-a929-5a09854cc148)



## Usage
Clone the repository
```
git clone https://github.com/forbesw17/MOODY_FOODIE.git
```
Install the dependencies
```
npm install
```


Next, you'll need to head over to [Google Cloud Platform](https://cloud.google.com/?hl=en)
- Create an account or sign in
- Go to developer console
- Creat new project
- Go to APIs and Services --> Credentials from the navigation menu
- Create an API key

Create a .env file inside the project root directory and paste the following inside
```
EXPO_PUBLIC_NEARBY_PLACES_URL=https://maps.googleapis.com/maps/api/place/nearbysearch/json

EXPO_PUBLIC_GOOGLE_PLACES_API_KEY=YOUR_API_KEY_GOES_HERE
```

Finally, run
```
npx expo start
```


