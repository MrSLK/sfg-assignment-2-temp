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
import { useSelector, useDispatch } from 'react-redux'

const Sidebar = () => {

  const { firstName, lastName, userId } = useSelector((state) => state.user);

  return (
    <div
      style={{ display: 'flex', height: `calc(100vh - 56px)`, overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/hirer"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            {userId ? `Hi ${firstName} ${lastName}` : "Not logged in"}
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/hirer" >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/hirer/add-job" >
              <CDBSidebarMenuItem icon="table">Advertise A Job</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/hirer/advertised-jobs" >
              <CDBSidebarMenuItem icon="user">Advertised Jobs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/hirer/drivers-for-hire" >
              <CDBSidebarMenuItem icon="user">Drivers for Hire</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/hirer/previous-jobs" >
              <CDBSidebarMenuItem icon="user">Previous Jobs</CDBSidebarMenuItem>
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

