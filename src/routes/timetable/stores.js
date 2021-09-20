// https://dev.to/danawoodman/svelte-quick-tip-connect-a-store-to-local-storage-4idi
// need to think about this a bit more in terms of ux

import { writable } from 'svelte/store'

// Get the value out of storage on load.
const storedgroup = localStorage.group
const storedcourse = localStorage.course
// or localStorage.getItem('content')

// Set the stored value or a sane default.
export const group = writable(storedgroup || '')
export const course = writable(storedcourse || '')

// Anytime the store changes, update the local storage value.
group.subscribe((value) => localStorage.group = value)
// or localStorage.setItem('content', value)