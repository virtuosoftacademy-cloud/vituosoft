

'use  client'

const MaxLines = ({ text, NoOfLines }) => {
    return (
        <p className="line-clamp text-sm" style={{ WebkitLineClamp: NoOfLines }}>
            {text}
        </p>
    );
};

export default MaxLines;