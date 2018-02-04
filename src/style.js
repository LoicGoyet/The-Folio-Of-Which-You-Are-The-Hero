export default `
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Press Start 2P', sans-serif;
        font-size: 14px;
        line-height: 1.5;
        background-color: black;
        color: white;
    }

    p {
        margin: 0 0 1rem;
    }
`

export const appContainer = () => ({
    maxWidth: '56.25rem',
    margin: 'auto',
    padding: '0 1rem',
})
