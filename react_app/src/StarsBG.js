function StarsBG() {
    const starCount = 300;
    const get_random = (x) => Math.floor(Math.random() * x);
    return (
        <div className="starsBG">
            {[...Array(starCount)].map((_, i) =>
                <span className="star" key={i}
                style={{
                    position: "absolute",
                    left: get_random(100) + 'vw',
                    top: get_random(100) + 'vh',
                }}/>
            )}
            <div id='planet1'/>
            <div id='planet2'/>
            <div id='planet3'/>
        </div>
    )
}

export default StarsBG