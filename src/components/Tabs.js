import React from 'react'

const Tabs = (props) => {
    const {tabs, setTabs } = props;

    const changeTab = (e, i) => {
        const [ ...curTabs ] = tabs;
        for ( let tab of curTabs) {
            tab.selected = false;
        }

        curTabs[i].selected = true;
        setTabs(curTabs);
    }

    const btnSelected = {
        background : 'cyan'
    }

    const btnUnselected = {
        background: 'white'
    }
    return (
        <div>
        {
            tabs.map((tab, i) => 
            <button key = {i} onClick = { e => changeTab(e, i)} style= {tab.selected ? btnSelected : btnUnselected}> {tab.title} </button>
            )
        }
            <div>

                    {
                        tabs.map((tab, i) => 
                        {
                            if(tab.selected) {
                                return  <p key = {i}> { tab.content }</p>
                            }
                        }
                        )
                    }
            </div>
        </div>
                
                
    )
}

export default Tabs
