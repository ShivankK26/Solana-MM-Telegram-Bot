export default {
    data: {} as { totalUser?: number; registered?: Date; lang?: string },
    get stats() {
        const { totalUser = 0, registered, lang = 'en' } = this.data;
        const date = registered ? new Date(registered).toLocaleDateString() : 'N/A';
        return `📊 Statistics\n\nTotal Users: ${totalUser}\nRegistered: ${date}\nLanguage: ${lang}`;
    }
} 