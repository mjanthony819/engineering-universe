import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests/e2e',fullyParallel:false,use:{baseURL:'http://127.0.0.1:4173',headless:true},webServer:{command:'python3 -m http.server 4173 --directory out',url:'http://127.0.0.1:4173',reuseExistingServer:true},reporter:'list'});
