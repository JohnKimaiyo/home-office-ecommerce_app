import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";
import { initializeApp } from "firebase/app";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  type: "service_account",
  project_id: "healthbeautyecommerceapp",
  private_key_id: "04ce70f0d809f53e00393b9f22266d42b6afdd99",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+r4aF/A03Aw8+\nXY77WfnQjVY7GAY4f91Lw/nqxO7JsfKcn/wmrYgtcsFulCGNA2uUhARLmYg/ugpr\n8PghUDgzR1wujqzqFAztg7ct0mDa2id5NEREDIuHCyZNxGoKY4EDYKkOmWm4D6qs\n0fHVKhwLkNyRuRoLRt5uU5q5c5/YKj4H0LP+gnls/A4l/woMBXSt1S9b1lJ939Cc\n7XFj65sjdANVL+t2Rn31hKgmIg6AOHpIEgkGjM6ZONjzYOpTbiIVbaRpaeBf6QFq\nPyfxErMGQ9vuagiAFb9uEpYrQGLcp7ZV5xRE3xp+hP2s6uSATGHBMKcGGQ1iJQ/c\nwQ77X+e/AgMBAAECggEACqcf+vUcSZoPJ8+A00P6RiGz0yIvvsgEx6XPnOfj5F9N\nVO+PJxu6cSeN7OOzqmyqEBQi3nAQpmkMd7cDCAFptu30XpBYiYPMY2EXZyTvhbOf\nLKNGcjLIpd4ETszEuYb+/yMqkz3LJAu2TbGjMuK+XFsNlTg/XztWL0bWbLq+NFWy\nYxJeZ9HOBn7t9YTgDj2pZQK677vd00LN+ddpvtvMnY9au0H4vuyx/x3G9qrIjiz/\n8uMhaQyjFbiC5+KKeyFicQ726rULkN3w6POo0fp7okO77w6juH2wNBvzMlhctN9+\nxYkoZr8nWBmK7Ak17ogyUwdpSkZjrJjfLlfUxfoS2QKBgQD4B8j9WtaBAQDhqVXl\n0ZCTsiuPRwJ+fkNv6CkabZlJO9nd9UWIxmlqlxnJ/cuIolnq6O5U3LqsAl+b5BHo\n1aRyw4r1bTLXmmz3Vb/UBJdMGbz7ZYa6HfSYobo7F8fqKriJOyjRoF3wOEGziyxU\n2zlZsPE88u/EHkfFaZXeXEZL0wKBgQDE0AqljjYa0mDYxThZXCsMSXSrRCXLzw/P\ndyZHFMdndIO9sHSCP5wf8BF7xJa0YweYR4poFkJ6fBEzhdph4AvCjA0Y42LBcDnC\nlBzqTwoHEff8LZI7y5TXha83STNbLAq1uj9ZNrXHd/l2MP9wm6ViwUQETVZ6gqAG\nl3oK3iEc5QKBgDxyiUVVshlWiUR15H1SCY41SfBtOepiE0Veq0XJmCYE9B/n+r5O\nvLpBgQN9WvE9v/REOHFuKgBpw6tWdhbsmltt1JvjtRReilftCgc95zGgxDHwmFkb\nm9Tm9WAZd5tWNgsb4+LS1pII49pB/NfhZaS6PtC/1DdTueIezWuXyXoJAoGAdtEW\nLF6PgV/SwetGmoQPJQrPmXm5y7IE3H4VKMJ9o5Ju2jzGCb/3NDzNgUfsp5hFhIRk\nJXSSy7lM9Srw7TfCQcAlRAo6m4dyB2s9jaML7brGWIL2jozYHckCP8E8dOVAzfdT\nuTtTQMnIW7c27ze3/8enlWVPOQTVMUWPkzIJEZUCgYEA9XVVg8ujSiIjiV7B6S/5\n+mQOyonKYfNtdu1f2SlWtL0pxdippsKIlJhVWlP9RH3rDF0FtrZNaWzFhQPbdlMV\nrBHzTsbaUPFnLFrABHKSeoTepv+KqkygHP0/lrzbem9dlz/BvHjg5Sn9FiVUXbfW\nFrWDU6G6ZHoAJuQvpWRPKTM=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-oo7vz@healthbeautyecommerceapp.iam.gserviceaccount.com",
  client_id: "115865548155883569104",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-oo7vz%40healthbeautyecommerceapp.iam.gserviceaccount.com",
};

const app = initializeApp(firebaseConfig);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };