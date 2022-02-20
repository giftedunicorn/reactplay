import React from "react";

const MyTabsComponent = (props) => {
    let [currentTab, setCurrentTab] = React.useState(0)
    let tabs = props.children || []
    
    const handleOnClick = function(index) {
        setCurrentTab(index)
    }

    // Use console.log() for debugging
    if (tabs.length === 0) {
        return <div className="tabs"></div>
    }

    return (
        <>
            <div className="tabs">
                {tabs.map((item, index) => {
                    const tab = item.props
                    const className = currentTab === index ? "btn-active" : "btn"
                    const disabled = currentTab === index ? true : false

                    if (!tab.title) return null
                    
                    return (
                        <button 
                            key={tab.title} 
                            className={className} 
                            disabled={disabled} 
                            onClick={() => handleOnClick(index)}
                        >
                            {tab.title}
                        </button>
                    )
                })}
                <div className="view">
                    {tabs[currentTab] && tabs[currentTab].props.children}
                </div>
            </div>
            <style>{`
                .tabs {
                }
                .view {
                }
                .btn {
                }
                .btn-active {
                }
            `}
            </style>
        </>
    )
};

export default MyTabsComponent;
