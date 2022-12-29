import React from 'react';

const ProgressBar = ({ completeColor, notCompleteColor, completed, titleBar1, titleBar2, spanBar1, spanBar2 }) => {


    const ProgressLineOne = {
        width: `${'30'}%`,
        backgroundColor: completeColor
    }
    
    const ProgressLineTwo = {
        width: `${'100' - '30'}%`,
        backgroundColor: notCompleteColor
    }

    const ProgressLineSpanOne = {
        width: `${'30'}%`
    }

    const ProgressLineSpanTwo = {
        width: `${'100' - '30'}%`,

    }

    return (
        <div>
            <div className="ProgressBar">
                <div style={ProgressLineOne}>
                    <p className="ProgressBar__text">{titleBar1}</p>
                </div>
                <div style={ProgressLineTwo}>
                    <p className="ProgressBar__text">{titleBar2}</p>
                </div>
            </div>
            <div className="ProgressBar">
                <div style={ProgressLineSpanOne}>
                    <span className="ProgressBar__span">{spanBar1}</span>
                </div>
                <div style={ProgressLineSpanTwo}>
                    <span className="ProgressBar__span">{spanBar2}</span>
                </div>
            </div>
            
            
        </div>
    );
};

export default ProgressBar;