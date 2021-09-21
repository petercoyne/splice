// stores/user.js
import { browser } from "$app/env";
import { writable } from 'svelte-local-storage-store'
export const group = writable('group',"A")