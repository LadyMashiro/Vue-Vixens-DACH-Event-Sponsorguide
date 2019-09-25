module.exports = {
    title: 'Vue Vixens DACH Event Sponsorguide',
    description: '',
    themeConfig: {

        logo: '/vuevixens.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Sponsorguide', link: '/vuevixens/info' },
            { text: 'Vue Vixens', link: 'https://vuevixens.org' }
        ],
        //sidebar: 'auto'
        sidebar: {
            '/vuevixens/': [
                'info',
                'workshops',
                'meetups'
            ]
        },
        markdown: {
            lineNumbers: true
        },
        search: false
    }
}