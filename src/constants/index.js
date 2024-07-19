export const HEADERS = {
    AUTHORIZATION: "authorization",
    REFRESH_TOKEN: "refresh-token",
    X_CLIENT_ID: "x-client-id",
    LOGOUT: "logout",
    SHOULD_LOGOUT: "x-required-logout",
};

export const LOCAL_KEYS = {
    USER_ID: "__uid",
    ACCESS_TOKEN: "__acc_tk",
    REFRESH_TOKEN: "__ref_tk",
};

export const QUERY_KEYS = {
    AUTH: {
        GET_ME: "GET_ME",
    },
    USER: {
        GET_ALL: "USER_GET_ALL",
    },
    TAG: {
        GET_ALL: "TAG_GET_ALL",
    },
    PART: {
        GET_ALL: "PART_GET_ALL",
    },
    QUESTION_TYPE: {
        GET_ALL: "QUESTION_TYPE_GET_ALL",
    },
    TEST: {
        GET_ALL: "TEST_GET_ALL",
        DETAILS: "TEST_GET_DETAILS",
    },
    QUESTION: {
        GET_BY_TEST: "QUESTION_GET_BY_TEST",
    },
};

export const USER_ROLES = {
    ADMIN: "admin",
    USER: "user",
};

export const USER_ROLE_LABELS = {
    [USER_ROLES.ADMIN]: "Quản trị viên",
    [USER_ROLES.USER]: "Người dùng",
};

export const USER_STATUSES = {
    ACTIVE: "active",
    INACTIVE: "inactive",
    DELETED: "deleted",
};

export const USER_STATUS_LABELS = {
    [USER_STATUSES.ACTIVE]: "Đang hoạt động",
    [USER_STATUSES.INACTIVE]: "Không hoạt động",
    [USER_STATUSES.DELETED]: "Đã xoá",
};

export const USER_STATUS_COLORS = {
    [USER_STATUSES.ACTIVE]: "text-green-500",
    [USER_STATUSES.INACTIVE]: "text-gray-500",
    [USER_STATUSES.DELETED]: "red-gray-500",
};

export const PAGINATION = {
    LIMIT: 10,
};

export const questionQuantity = {
    1: 6,
    2: 25,
    3: 39,
    4: 30,
    5: 30,
    6: 16,
    7: 54,
    71: 29,
    72: 10,
    73: 15,
    200: 200,
};
