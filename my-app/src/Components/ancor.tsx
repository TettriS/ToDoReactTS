import React from "react";

interface AncorProps {
    className: string;
    href: string;
    rel: string;
    target: string;
    children?: string | JSX.Element;
}

function Anchor(props: AncorProps): JSX.Element {
    return (
        <a
            className={ props.className }
            href={ props.href }
            rel={ props.rel }
            target={ props.target }
        >
            { props.children }
        </a>
    );
}

export default Anchor;