import React from 'react'
import FileList from "../FilterList/FilterList";
import LaunchSites from "../LaunchSites/LaunchSites";
import { connect } from "react-redux";
import * as launchActions from "../../redux/actions/launchActions";
import { bindActionCreators } from "redux";

const heading = {
  fontWeight: 'bold',
  fontSize: '20px',
  padding: '20px 0 20px 0'
}
const header = {
  display: 'flex',
  alignItems: 'left'
}

function Dashboard({launches, location}) {
    return (
      <main data-testid="dasboard">
          <div style={header}><span style={heading}>SpaceX Launch Programs</span></div>
          <div className="dashboardCls">
            <FileList query={location.search}/>
            <LaunchSites launches={launches}/>
          </div>
          <span style={heading}>Developed By : Raunak Gupta</span>
      </main>
    )
}
function mapStateToProps(state) {
  return {
    launches: state.launches.launches
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadLaunches: bindActionCreators(launchActions.loadLaunches, dispatch)
    }
  };
 }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
