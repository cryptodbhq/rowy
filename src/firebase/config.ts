const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID || "cryptodb-dev";
export default {
  apiKey:
    process.env.REACT_APP_FIREBASE_PROJECT_WEB_API_KEY ||
    "AIzaSyAq2i2PUZbzSmVMHtjiX6UZ5u6UpE4uuTo",
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  projectId: projectId,
  storageBucket: `${projectId}.appspot.com`,
  appId: "1:1062939471114:web:c42d1fb2461bd1a01c9ef3",
};
