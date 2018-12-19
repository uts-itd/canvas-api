const settings = require('./settings');
const errorReports = require('./lib/errorReports');
const apiTokenScopes = require('./lib/apiTokenScopes');
const outcomeResults = require('./lib/outcomeResults');
const courseAuditLog = require('./lib/courseAuditLog');
const admins = require('./lib/admins');
const quizExtensions = require('./lib/quizExtensions');
const gradeChangeLog = require('./lib/gradeChangeLog');
const bookmarks = require('./lib/bookmarks');
const brandConfigs = require('./lib/brandConfigs');
const services = require('./lib/services');
const liveAssessments = require('./lib/liveAssessments');
const customGradebookColumns = require('./lib/customGradebookColumns');
const tabs = require('./lib/tabs');
const plannerOverride = require('./lib/plannerOverride');
const plagiarismDetectionSubmissions = require('./lib/plagiarismDetectionSubmissions');
const proficiencyRatings = require('./lib/proficiencyRatings');
const quizQuestionGroups = require('./lib/quizQuestionGroups');
const search = require('./lib/search');
const submissionComments = require('./lib/submissionComments');
const accountReports = require('./lib/accountReports');
const accountNotifications = require('./lib/accountNotifications');
const communicationChannels = require('./lib/communicationChannels');
const announcementExternalFeeds = require('./lib/announcementExternalFeeds');
const collaborations = require('./lib/collaborations');
const gradingStandards = require('./lib/gradingStandards');
const courseQuizExtensions = require('./lib/courseQuizExtensions');
const commMessages = require('./lib/commMessages');
const gradingPeriods = require('./lib/gradingPeriods');
const accountDomainLookups = require('./lib/accountDomainLookups');
const favorites = require('./lib/favorites');
const jwTs = require('./lib/jwTs');
const moderatedGrading = require('./lib/moderatedGrading');
const outcomes = require('./lib/outcomes');
const planner = require('./lib/planner');
const userObservees = require('./lib/userObservees');
const quizSubmissionFiles = require('./lib/quizSubmissionFiles');
const plagiarismDetectionPlatformUsers = require('./lib/plagiarismDetectionPlatformUsers');
const gradebookHistory = require('./lib/gradebookHistory');
const quizAssignmentOverrides = require('./lib/quizAssignmentOverrides');
const plagiarismDetectionPlatformAssignments = require('./lib/plagiarismDetectionPlatformAssignments');
const enrollmentTerms = require('./lib/enrollmentTerms');
const logins = require('./lib/logins');
const quizIpFilters = require('./lib/quizIpFilters');
const plannerNote = require('./lib/plannerNote');
const ePubExports = require('./lib/ePubExports');
const quizSubmissionEvents = require('./lib/quizSubmissionEvents');
const sharedBrandConfigs = require('./lib/sharedBrandConfigs');
const sisImportErrors = require('./lib/sisImportErrors');
const pollSessions = require('./lib/pollSessions');
const quizSubmissionQuestions = require('./lib/quizSubmissionQuestions');
const announcements = require('./lib/announcements');
const originalityReports = require('./lib/originalityReports');
const analytics = require('./lib/analytics');
const featureFlags = require('./lib/featureFlags');
const quizSubmissions = require('./lib/quizSubmissions');
const groupCategories = require('./lib/groupCategories');
const authenticationsLog = require('./lib/authenticationsLog');
const notificationPreferences = require('./lib/notificationPreferences');
const contentExports = require('./lib/contentExports');
const sections = require('./lib/sections');
const sisImports = require('./lib/sisImports');
const authenticationProviders = require('./lib/authenticationProviders');
const blueprintCourses = require('./lib/blueprintCourses');
const conversations = require('./lib/conversations');
const latePolicy = require('./lib/latePolicy');
const groups = require('./lib/groups');
const appointmentGroups = require('./lib/appointmentGroups');
const polls = require('./lib/polls');
const calendarEvents = require('./lib/calendarEvents');
const modules = require('./lib/modules');
const pages = require('./lib/pages');
const quizSubmissionUserList = require('./lib/quizSubmissionUserList');
const progress = require('./lib/progress');
const enrollments = require('./lib/enrollments');
const peerReviews = require('./lib/peerReviews');
const contentMigrations = require('./lib/contentMigrations');
const pollSubmissions = require('./lib/pollSubmissions');
const assignmentGroups = require('./lib/assignmentGroups');
const webhooksSubscriptions = require('./lib/webhooksSubscriptions');
const pollChoices = require('./lib/pollChoices');
const submissions = require('./lib/submissions');
const outcomeGroups = require('./lib/outcomeGroups');
const rubrics = require('./lib/rubrics');
const conferences = require('./lib/conferences');
const quizStatistics = require('./lib/quizStatistics');
const sisIntegration = require('./lib/sisIntegration');
const quizReports = require('./lib/quizReports');
const assignments = require('./lib/assignments');
const users = require('./lib/users');
const outcomeImports = require('./lib/outcomeImports');
const courses = require('./lib/courses');
const quizQuestions = require('./lib/quizQuestions');
const discussionTopics = require('./lib/discussionTopics');
const quizzes = require('./lib/quizzes');
const roles = require('./lib/roles');
const accounts = require('./lib/accounts');
const files = require('./lib/files');
const externalTools = require('./lib/externalTools');

let canvas = {
    errorReports,
    apiTokenScopes,
    outcomeResults,
    courseAuditLog,
    admins,
    quizExtensions,
    gradeChangeLog,
    bookmarks,
    brandConfigs,
    services,
    liveAssessments,
    customGradebookColumns,
    tabs,
    plannerOverride,
    plagiarismDetectionSubmissions,
    proficiencyRatings,
    quizQuestionGroups,
    search,
    submissionComments,
    accountReports,
    accountNotifications,
    communicationChannels,
    announcementExternalFeeds,
    collaborations,
    gradingStandards,
    courseQuizExtensions,
    commMessages,
    gradingPeriods,
    accountDomainLookups,
    favorites,
    jwTs,
    moderatedGrading,
    outcomes,
    planner,
    userObservees,
    quizSubmissionFiles,
    plagiarismDetectionPlatformUsers,
    gradebookHistory,
    quizAssignmentOverrides,
    plagiarismDetectionPlatformAssignments,
    enrollmentTerms,
    logins,
    quizIpFilters,
    plannerNote,
    ePubExports,
    quizSubmissionEvents,
    sharedBrandConfigs,
    sisImportErrors,
    pollSessions,
    quizSubmissionQuestions,
    announcements,
    originalityReports,
    analytics,
    featureFlags,
    quizSubmissions,
    groupCategories,
    authenticationsLog,
    notificationPreferences,
    contentExports,
    sections,
    sisImports,
    authenticationProviders,
    blueprintCourses,
    conversations,
    latePolicy,
    groups,
    appointmentGroups,
    polls,
    calendarEvents,
    modules,
    pages,
    quizSubmissionUserList,
    progress,
    enrollments,
    peerReviews,
    contentMigrations,
    pollSubmissions,
    assignmentGroups,
    webhooksSubscriptions,
    pollChoices,
    submissions,
    outcomeGroups,
    rubrics,
    conferences,
    quizStatistics,
    sisIntegration,
    quizReports,
    assignments,
    users,
    outcomeImports,
    courses,
    quizQuestions,
    discussionTopics,
    quizzes,
    roles,
    accounts,
    files,
    externalTools,
    settings
}

module.exports = (domain, token) => {
    settings.domain = domain;
    settings.token = token;
    return canvas;
}