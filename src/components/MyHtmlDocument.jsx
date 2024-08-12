import MyStyles from './MyStyles';

const MyHtmlDocument = () => (
    <article className="pdf-html">
        <div style={MyStyles.body}>
            <div style={MyStyles.section}>
                <h1 style={MyStyles.title}>Hello, Jack!</h1>
                <p>This is a sample document created with React.</p>
                <img
                    style={MyStyles.image}
                    src="/char.jpg"
                    alt="Char"
                />
                <p>A Wild Charmander Appears!</p>
            </div>
        </div>
    </article>
);

export default MyHtmlDocument