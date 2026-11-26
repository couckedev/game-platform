import { defineStore } from 'pinia';
import { ref } from 'vue';

interface AuthenticationConfig {
  onSignIn?: () => void;
}
const createAuthentication = (config: AuthenticationConfig) => ({
  startSignInProcess() {
    if (config.onSignIn) {
      config.onSignIn();
    }
    return;
  },
  isAuthenticated: false,
});

const usePlayerStore = defineStore('player', () => {
  const hasSignedIn = ref(false);

  const restoreIdentity = () => {
    hasSignedIn.value = authentication.isAuthenticated;
  };
});
