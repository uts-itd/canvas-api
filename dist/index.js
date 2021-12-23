var settings = require('./settings');
var errorReports = require('./lib/errorReports');
var apiTokenScopes = require('./lib/apiTokenScopes');
var outcomeResults = require('./lib/outcomeResults');
var courseAuditLog = require('./lib/courseAuditLog');
var admins = require('./lib/admins');
var quizExtensions = require('./lib/quizExtensions');
var gradeChangeLog = require('./lib/gradeChangeLog');
var bookmarks = require('./lib/bookmarks');
var brandConfigs = require('./lib/brandConfigs');
var services = require('./lib/services');
var liveAssessments = require('./lib/liveAssessments');
var customGradebookColumns = require('./lib/customGradebookColumns');
var tabs = require('./lib/tabs');
var plannerOverride = require('./lib/plannerOverride');
var plagiarismDetectionSubmissions = require('./lib/plagiarismDetectionSubmissions');
var proficiencyRatings = require('./lib/proficiencyRatings');
var quizQuestionGroups = require('./lib/quizQuestionGroups');
var search = require('./lib/search');
var submissionComments = require('./lib/submissionComments');
var accountReports = require('./lib/accountReports');
var accountNotifications = require('./lib/accountNotifications');
var communicationChannels = require('./lib/communicationChannels');
var announcementExternalFeeds = require('./lib/announcementExternalFeeds');
var collaborations = require('./lib/collaborations');
var gradingStandards = require('./lib/gradingStandards');
var courseQuizExtensions = require('./lib/courseQuizExtensions');
var commMessages = require('./lib/commMessages');
var gradingPeriods = require('./lib/gradingPeriods');
var accountDomainLookups = require('./lib/accountDomainLookups');
var favorites = require('./lib/favorites');
var jwTs = require('./lib/jwTs');
var moderatedGrading = require('./lib/moderatedGrading');
var outcomes = require('./lib/outcomes');
var planner = require('./lib/planner');
var userObservees = require('./lib/userObservees');
var quizSubmissionFiles = require('./lib/quizSubmissionFiles');
var plagiarismDetectionPlatformUsers = require('./lib/plagiarismDetectionPlatformUsers');
var gradebookHistory = require('./lib/gradebookHistory');
var quizAssignmentOverrides = require('./lib/quizAssignmentOverrides');
var plagiarismDetectionPlatformAssignments = require('./lib/plagiarismDetectionPlatformAssignments');
var enrollmentTerms = require('./lib/enrollmentTerms');
var logins = require('./lib/logins');
var quizIpFilters = require('./lib/quizIpFilters');
var plannerNote = require('./lib/plannerNote');
var ePubExports = require('./lib/ePubExports');
var quizSubmissionEvents = require('./lib/quizSubmissionEvents');
var sharedBrandConfigs = require('./lib/sharedBrandConfigs');
var sisImportErrors = require('./lib/sisImportErrors');
var pollSessions = require('./lib/pollSessions');
var quizSubmissionQuestions = require('./lib/quizSubmissionQuestions');
var announcements = require('./lib/announcements');
var originalityReports = require('./lib/originalityReports');
var analytics = require('./lib/analytics');
var featureFlags = require('./lib/featureFlags');
var quizSubmissions = require('./lib/quizSubmissions');
var groupCategories = require('./lib/groupCategories');
var authenticationsLog = require('./lib/authenticationsLog');
var notificationPreferences = require('./lib/notificationPreferences');
var contentExports = require('./lib/contentExports');
var sections = require('./lib/sections');
var sisImports = require('./lib/sisImports');
var authenticationProviders = require('./lib/authenticationProviders');
var blueprintCourses = require('./lib/blueprintCourses');
var conversations = require('./lib/conversations');
var latePolicy = require('./lib/latePolicy');
var groups = require('./lib/groups');
var appointmentGroups = require('./lib/appointmentGroups');
var polls = require('./lib/polls');
var calendarEvents = require('./lib/calendarEvents');
var modules = require('./lib/modules');
var pages = require('./lib/pages');
var quizSubmissionUserList = require('./lib/quizSubmissionUserList');
var progress = require('./lib/progress');
var enrollments = require('./lib/enrollments');
var peerReviews = require('./lib/peerReviews');
var contentMigrations = require('./lib/contentMigrations');
var pollSubmissions = require('./lib/pollSubmissions');
var assignmentGroups = require('./lib/assignmentGroups');
var webhooksSubscriptions = require('./lib/webhooksSubscriptions');
var pollChoices = require('./lib/pollChoices');
var submissions = require('./lib/submissions');
var outcomeGroups = require('./lib/outcomeGroups');
var rubrics = require('./lib/rubrics');
var conferences = require('./lib/conferences');
var quizStatistics = require('./lib/quizStatistics');
var sisIntegration = require('./lib/sisIntegration');
var quizReports = require('./lib/quizReports');
var assignments = require('./lib/assignments');
var users = require('./lib/users');
var outcomeImports = require('./lib/outcomeImports');
var courses = require('./lib/courses');
var quizQuestions = require('./lib/quizQuestions');
var discussionTopics = require('./lib/discussionTopics');
var quizzes = require('./lib/quizzes');
var roles = require('./lib/roles');
var accounts = require('./lib/accounts');
var files = require('./lib/files');
var externalTools = require('./lib/externalTools');
var canvas = {
    errorReports: errorReports,
    apiTokenScopes: apiTokenScopes,
    outcomeResults: outcomeResults,
    courseAuditLog: courseAuditLog,
    admins: admins,
    quizExtensions: quizExtensions,
    gradeChangeLog: gradeChangeLog,
    bookmarks: bookmarks,
    brandConfigs: brandConfigs,
    services: services,
    liveAssessments: liveAssessments,
    customGradebookColumns: customGradebookColumns,
    tabs: tabs,
    plannerOverride: plannerOverride,
    plagiarismDetectionSubmissions: plagiarismDetectionSubmissions,
    proficiencyRatings: proficiencyRatings,
    quizQuestionGroups: quizQuestionGroups,
    search: search,
    submissionComments: submissionComments,
    accountReports: accountReports,
    accountNotifications: accountNotifications,
    communicationChannels: communicationChannels,
    announcementExternalFeeds: announcementExternalFeeds,
    collaborations: collaborations,
    gradingStandards: gradingStandards,
    courseQuizExtensions: courseQuizExtensions,
    commMessages: commMessages,
    gradingPeriods: gradingPeriods,
    accountDomainLookups: accountDomainLookups,
    favorites: favorites,
    jwTs: jwTs,
    moderatedGrading: moderatedGrading,
    outcomes: outcomes,
    planner: planner,
    userObservees: userObservees,
    quizSubmissionFiles: quizSubmissionFiles,
    plagiarismDetectionPlatformUsers: plagiarismDetectionPlatformUsers,
    gradebookHistory: gradebookHistory,
    quizAssignmentOverrides: quizAssignmentOverrides,
    plagiarismDetectionPlatformAssignments: plagiarismDetectionPlatformAssignments,
    enrollmentTerms: enrollmentTerms,
    logins: logins,
    quizIpFilters: quizIpFilters,
    plannerNote: plannerNote,
    ePubExports: ePubExports,
    quizSubmissionEvents: quizSubmissionEvents,
    sharedBrandConfigs: sharedBrandConfigs,
    sisImportErrors: sisImportErrors,
    pollSessions: pollSessions,
    quizSubmissionQuestions: quizSubmissionQuestions,
    announcements: announcements,
    originalityReports: originalityReports,
    analytics: analytics,
    featureFlags: featureFlags,
    quizSubmissions: quizSubmissions,
    groupCategories: groupCategories,
    authenticationsLog: authenticationsLog,
    notificationPreferences: notificationPreferences,
    contentExports: contentExports,
    sections: sections,
    sisImports: sisImports,
    authenticationProviders: authenticationProviders,
    blueprintCourses: blueprintCourses,
    conversations: conversations,
    latePolicy: latePolicy,
    groups: groups,
    appointmentGroups: appointmentGroups,
    polls: polls,
    calendarEvents: calendarEvents,
    modules: modules,
    pages: pages,
    quizSubmissionUserList: quizSubmissionUserList,
    progress: progress,
    enrollments: enrollments,
    peerReviews: peerReviews,
    contentMigrations: contentMigrations,
    pollSubmissions: pollSubmissions,
    assignmentGroups: assignmentGroups,
    webhooksSubscriptions: webhooksSubscriptions,
    pollChoices: pollChoices,
    submissions: submissions,
    outcomeGroups: outcomeGroups,
    rubrics: rubrics,
    conferences: conferences,
    quizStatistics: quizStatistics,
    sisIntegration: sisIntegration,
    quizReports: quizReports,
    assignments: assignments,
    users: users,
    outcomeImports: outcomeImports,
    courses: courses,
    quizQuestions: quizQuestions,
    discussionTopics: discussionTopics,
    quizzes: quizzes,
    roles: roles,
    accounts: accounts,
    files: files,
    externalTools: externalTools,
    settings: settings
};
module.exports = function (domain, token) {
    settings.domain = domain;
    settings.token = token;
    return canvas;
};
//# sourceMappingURL=index.js.map