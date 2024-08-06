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
        GET_BY_SLUG: "QUESTION_TYPE_GET_BY_SLUG",
    },
    TEST: {
        GET_ALL: "TEST_GET_ALL",
        DETAILS: "TEST_GET_DETAILS",
        GET_WITH_YEARS: "TEST_GET_WITH_YEARS",
    },
    NOTE: {
        GET_ALL: "NOTE_GET_ALL",
        DETAILS: "NOTE_GET_DETAILS",
    },
    NOTE_DETAILS: {
        GET_ALL: "NOTE_DETAILS_GET_ALL",
        DETAILS: "NOTE_DETAILS_GET_DETAILS",
    },
    SCORE: {
        GET_ALL: "SCORE_GET_ALL",
        DETAILS: "SCORE_GET_DETAILS",
    },
    DOCUMENT: {
        GET_ALL: "DOCUMENT_GET_ALL",
        DETAILS: "DOCUMENT_GET_DETAILS",
    },
    SCORE_DETAILS: {
        GET_ALL: "SCORE_DETAILS_GET_ALL",
        DETAILS: "SCORE_DETAILS_GET_DETAILS",
    },
    QUESTION: {
        GET_ALL: "QUESTION_GET_ALL",
        GET_BY_TEST: "QUESTION_GET_BY_TEST",
        GET_BY_TEST_PART_ID: "QUESTION_GET_BY_TEST_PART_ID",
    },
    TEST_PART: {
        GET_BY_PART_ID: "TEST_PART_GET_BY_PART_ID",
        GET_BY_ID: "TEST_PART_GET_BY_ID",
    },
    EXAM: {
        DETAILS: "EXAM_GET_DETAILS",
        GET_EXAMS: "EXAM_GET_EXAMS",
        COUNT_FULL_TEST: "EXAM_COUNT_FULL_TEST",
        SUM_FULL_TEST_TIMER: "EXAM_SUM_FULL_TEST_TIMER",
        GET_MAX_QUESTION_CORRECT: "EXAM_GET_MAX_QUESTION_CORRECT",
        GET_STATISTIC_BY_DATE: "EXAM_GET_STATISTIC_BY_DATE",
    },
    COMMENT: {
        GET_ALL: "GET_COMMENT_ALL",
        DETAILS: "GET_COMMENT_DETAILS",
    },
    ROLE: {
        GET_ALL: "GET_ROLE_ALL",
    },
};

export const USER_ROLES = {
    ADMIN: "admin",
    USER: "user",
    TEACHER: "teacher",
};

export const USER_ROLE_LABELS = {
    [USER_ROLES.ADMIN]: "Quản trị viên",
    [USER_ROLES.USER]: "Người dùng",
    [USER_ROLES.TEACHER]: "Giáo viên",
};

export const GENDER_LABELS = {
    male: "Nam",
    female: "Nữ",
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

export const EXAM_TYPES = {
    FULL_TEST: "FULL_TEST",
    ONE_TEST: "ONE_TEST",
};

export const TIMER_TYPES = {
    DOWN: "down",
    UP: "up",
};
