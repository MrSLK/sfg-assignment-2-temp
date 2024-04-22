import React, { useEffect, useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'


const Sidebar = () => {
  
  const { firstName, lastName, userId } = useSelector((state) => state.user);

  return (
    <div
      style={{ display: 'flex', height: `calc(100vh - 56px)`, overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/driver"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            {userId ? `Hi ${firstName} ${lastName}` : "Not logged in"}
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/driver" >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/driver/job-invites" >
              <CDBSidebarMenuItem icon="columns">Job Invites</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/driver/profile" >
              <CDBSidebarMenuItem icon="user">Profile Page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/driver/previous-jobs" >
              <CDBSidebarMenuItem icon="table">Previous Jobs</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            DriveShare Inc.
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

