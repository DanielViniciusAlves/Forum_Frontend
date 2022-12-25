import Vue from 'vue'
import { openDB, deleteDB, wrap, unwrap } from 'idb';

Vue.use(openDB, deleteDB, wrap, unwrap)