<script setup lang="ts">
import { ref } from 'vue';

const hasSignedIn = ref(false);
</script>

<template>    
    <button type="button">Sign in with Google</button>

    <h2 id="player-registration-form-title">Join Game platform</h2>
    <form aria-labelledby="player-registration-form-title" v-if="hasSignedIn"></form>
</template>

<style scoped></style>
