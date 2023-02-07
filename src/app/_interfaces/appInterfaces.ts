export interface dashboardTableColumns {
  Serial_No: number;
  'Acc Opened': number;
  'Acc Closed': number;
  'State': string;
  'Region': string;
  Date: string;
  'Branch ID': number;
  'Active Accounts': number;
  'Audit Completed': number;
  'Branch Recon Completed': number;
  "moreDetails": []
}
export interface usersTableColumns {
  "Name": string;
  'Date Added': string;
  "Region": string;
  'Branch ID': number;
  'Phone Number': number;
  "Email ID": string;

}
export interface rolesTableColumns {
  "Roll Title": string;
  'Date Added': string;
  "Roll Access": string;
  'View': string;
  "Rights/Permissions": string;
  'Phone Number': number;

}


export interface userRolesTableColumns {
  "User Name": string;
  'User ID': number;
  'Branch ID': number;
  'Location': string;
  "Roll assigned": string;
  'Date of roll assigned': string;

}
export interface Rollpoop_upInterface {Roll_Title:string, Roll_Description:string, Roll_Access:string, View_Access:string,Rights_Permissions:string}
