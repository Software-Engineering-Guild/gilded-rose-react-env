import React, {useState} from "react";
import Alert from "react-bootstrap/Alert";

function WelcomeMessage() {
    const [show, setShow] = useState(true);

    return (
        <Alert variant="info">
            <Alert.Heading>Welcome!</Alert.Heading>
            <p>
                Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a
                prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
                Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We
                have a system in place that updates our inventory for us. It was developed by a no-nonsense type named
                Leeroy, who has moved on to new adventures.
            </p>
        </Alert>
    )
}

export default WelcomeMessage;
