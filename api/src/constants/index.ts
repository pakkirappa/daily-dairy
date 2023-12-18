/**
 * @description This file contains all the constants used in the application
 * @file        constants/index.ts
 */

export const FOLDER_NAMES = {
  PUBLIC: "public",
  UPLOADS: "uploads",
  STATIC_PATH: "static",
};

export const TABLE_NAMES = {
  USERS: "users",
  SUBSCRIPTIONS: "subscriptions",
  NOTEBOOKS: "notebooks",
  PAGES: "pages",
};

export const PRC_NAMES = {
  ADD_NOTEBOOK: "PRC_ADD_NOTEBOOK(?,?)", // p_name, p_user_id
  ADD_PAGE: "PRC_ADD_PAGE(?,?,?)", // p_notebook_id, p_content
  ADD_USER: "PRC_ADD_USER(?,?,?,?)", // p_name, p_username,p_email, p_password
  UPDATE_NOTEBOOK: "PRC_UPDATE_NOTEBOOK(?,?,?)", // p_user_id,p_notebook_id,p_name
  UPDATE_PAGE: "PRC_UPDATE_PAGE(?,?)", // p_page_id, p_content
  LOGIN: "PRC_LOGIN(?,?)", // p_username, p_password
};
