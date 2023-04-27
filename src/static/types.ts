interface ChildrenProps {
  children?: React.ReactNode;
}

export enum userRole {
  'ADMIN',
  'USER',
}

interface UserData {
  UserId: string;
  password: string;
  role: userRole;
}

export type {ChildrenProps, UserData};
