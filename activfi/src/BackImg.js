import React from 'react';

var sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${Background})`,
};

export default class Section extends React.Component {
    render() {
        return (
            <section style={sectionStyle}>
            </section>
        );
    }
}
