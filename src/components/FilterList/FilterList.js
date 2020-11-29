import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFilterToLaunches } from "../../redux/actions/launchActions";

function FilterList({query}) {
    const filters = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    const dispatch = useDispatch();
    const [allFilters] = useState(new Map());
    useEffect(() => {
        let filters = [{name: 'limit', value: 100}];
        if(query) {
            let params = query.replace('?', '').split('&');
            params.map(param => {
                let keyVal = param.split('=');
                if(keyVal[0] !== 'limit')
                    filters.push({name: keyVal[0], value: keyVal[1]});
            });
        }
        dispatch(addFilterToLaunches(filters));
    }, []);
    const clickedFilter = filter => {
        let updatedFilter = [];
        allFilters.set(filter.name, filter.value);
        allFilters.forEach((value, key ) => {
            updatedFilter.push({name: key, value: value})
        });
        dispatch(addFilterToLaunches(updatedFilter));

        if(filter.name === 'launch_year'){
            filters.map(val => {
                let ele = document.getElementById(filter.name+val);
                if(val === filter.value) {
                    ele.style.backgroundColor = '#7db804';
                } else {
                    ele.style.backgroundColor = '#c5e09a';
                }
            })
        } else {
            document.getElementById(filter.name+filter.value).style.backgroundColor = '#7db804';
            document.getElementById(filter.name+(!filter.value)).style.backgroundColor = '#c5e09a';
        }
    }
    return (
        <div style={filterList}>
            <h4><span style={header}>Filters</span></h4>
            <section style={displayFlex}>
                <span style={heading}>Launch Year</span>
                <div style={filtersCls}>
                    {filters.map(filter => <span style={filterCss} key={filter} id={'launch_year'+filter} onClick={clickedFilter.bind(this, {name:"launch_year", value:filter})}><span>{filter}</span></span>)}
                </div>
            </section>
            <section style={displayFlex}>
                <span style={heading}>Successful Launch</span>
                <div style={filtersCls}>
                    <span style={filterCss} id='launch_successtrue' onClick={clickedFilter.bind(this, {name:"launch_success", value:true})}><span>True</span></span>
                    <span style={filterCss} id='launch_successfalse' onClick={clickedFilter.bind(this, {name:"launch_success", value:false})}><span>False</span></span>
                </div>
            </section>
            <section style={displayFlex}>
                <span style={heading}>Successful Landing</span>
                <div style={filtersCls}>
                    <span style={filterCss} id='land_successtrue' onClick={clickedFilter.bind(this, {name:"land_success", value:true})}><span>True</span></span>
                    <span style={filterCss} id='land_successfalse' onClick={clickedFilter.bind(this, {name:"land_success", value:false})}><span>False</span></span>
                </div>
            </section>
            
        </div>
    )
}

const displayFlex = {
    display: 'flex',
    flexDirection: 'column'
}
const header = {
    fontSize: '20px',
    fontWeight: 'bold'
}
const heading = {
    textDecoration: 'underline',
    alignSelf: 'center',
    marginBottom: '15px',
    fontSize: '20px'
}
const filtersCls = {
    display: 'inline-block',
    flexFlow: 'wrap'
}
const filterList = {
    flex: 0.2,
    padding: '10px',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
    display: 'block'
}
const filterCss = {
    height: '20px',
    padding: '2px',
    borderRadius: '10px',
    fontSize: '14px',
    margin: '9px',
    display: 'inline-block',
    width: '33%',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '#c5e09a'
  }

export default FilterList

