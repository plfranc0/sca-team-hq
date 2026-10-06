/* SCA Team HQ — Firebase project config.
   Patrick pastes the web-app config from Firebase console → Project settings → Your apps here.
   Until this is filled in, the page runs in static mode (links, playbooks, team, stats all work;
   sign-in, tasks, notes, Doc Review and Stream Day notes are OFF and say so on screen).
   These values are public identifiers, not secrets. Access is controlled by firestore.rules. */
window.FIREBASE_CONFIG = null;
/* Example shape:
window.FIREBASE_CONFIG = {
  apiKey: "...",
  authDomain: "sca-team-hq.firebaseapp.com",
  projectId: "sca-team-hq",
  storageBucket: "sca-team-hq.firebasestorage.app",
  messagingSenderId: "...",
  appId: "..."
};
*/
