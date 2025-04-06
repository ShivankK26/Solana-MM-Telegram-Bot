import { View, ViewData } from '../types';

export function view(name: string, data?: ViewData): View {
    // @ts-ignore - Dynamic import is needed here
    const viewModule = require(`../views/${name}`);
    const view = viewModule.default;
    
    if (data) {
        view.data = data;
    }
    
    return view;
} 