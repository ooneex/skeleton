export type RoleType = "GUEST" | "TRIAL_USER" | "USER" | "PREMIUM_USER" | "VIP_USER" | "REVIEWER" | "MODERATOR" | "MANAGER" | "ADMIN" | "SUPER_ADMIN" | "SYSTEM";

export type RoleHierarchyRoleType = "ROLE_GUEST" | "ROLE_TRIAL_USER" | "ROLE_USER" | "ROLE_PREMIUM_USER" | "ROLE_VIP_USER" | "ROLE_REVIEWER" | "ROLE_MODERATOR" | "ROLE_MANAGER" | "ROLE_ADMIN" | "ROLE_SUPER_ADMIN" | "ROLE_SYSTEM";

export type RolesMapType = Record<RoleType, RoleHierarchyRoleType>;

export type TypedRolesConfigType = {
  roles: RolesMapType;
  hierarchy: Record<RoleHierarchyRoleType, {
    inherits?: RoleHierarchyRoleType[];
    description: string;
  }>;
};