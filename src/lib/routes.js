const errorReports = require('./errorReports');
const apiTokenScopes = require('./apiTokenScopes');
const outcomeResults = require('./outcomeResults');
const courseAuditLog = require('./courseAuditLog');
const admins = require('./admins');
const quizExtensions = require('./quizExtensions');
const gradeChangeLog = require('./gradeChangeLog');
const bookmarks = require('./bookmarks');
const brandConfigs = require('./brandConfigs');
const services = require('./services');
const liveAssessments = require('./liveAssessments');
const customGradebookColumns = require('./customGradebookColumns');
const tabs = require('./tabs');
const plannerOverride = require('./plannerOverride');
const plagiarismDetectionSubmissions = require('./plagiarismDetectionSubmissions');
const proficiencyRatings = require('./proficiencyRatings');
const quizQuestionGroups = require('./quizQuestionGroups');
const search = require('./search');
const submissionComments = require('./submissionComments');
const accountReports = require('./accountReports');
const accountNotifications = require('./accountNotifications');
const communicationChannels = require('./communicationChannels');
const announcementExternalFeeds = require('./announcementExternalFeeds');
const collaborations = require('./collaborations');
const gradingStandards = require('./gradingStandards');
const courseQuizExtensions = require('./courseQuizExtensions');
const commMessages = require('./commMessages');
const gradingPeriods = require('./gradingPeriods');
const accountDomainLookups = require('./accountDomainLookups');
const favorites = require('./favorites');
const jwTs = require('./jwTs');
const moderatedGrading = require('./moderatedGrading');
const outcomes = require('./outcomes');
const planner = require('./planner');
const userObservees = require('./userObservees');
const quizSubmissionFiles = require('./quizSubmissionFiles');
const plagiarismDetectionPlatformUsers = require('./plagiarismDetectionPlatformUsers');
const gradebookHistory = require('./gradebookHistory');
const quizAssignmentOverrides = require('./quizAssignmentOverrides');
const plagiarismDetectionPlatformAssignments = require('./plagiarismDetectionPlatformAssignments');
const enrollmentTerms = require('./enrollmentTerms');
const logins = require('./logins');
const quizIpFilters = require('./quizIpFilters');
const plannerNote = require('./plannerNote');
const ePubExports = require('./ePubExports');
const quizSubmissionEvents = require('./quizSubmissionEvents');
const sharedBrandConfigs = require('./sharedBrandConfigs');
const sisImportErrors = require('./sisImportErrors');
const pollSessions = require('./pollSessions');
const quizSubmissionQuestions = require('./quizSubmissionQuestions');
const announcements = require('./announcements');
const originalityReports = require('./originalityReports');
const analytics = require('./analytics');
const featureFlags = require('./featureFlags');
const quizSubmissions = require('./quizSubmissions');
const groupCategories = require('./groupCategories');
const authenticationsLog = require('./authenticationsLog');
const notificationPreferences = require('./notificationPreferences');
const contentExports = require('./contentExports');
const sections = require('./sections');
const sisImports = require('./sisImports');
const authenticationProviders = require('./authenticationProviders');
const blueprintCourses = require('./blueprintCourses');
const conversations = require('./conversations');
const latePolicy = require('./latePolicy');
const groups = require('./groups');
const appointmentGroups = require('./appointmentGroups');
const polls = require('./polls');
const calendarEvents = require('./calendarEvents');
const modules = require('./modules');
const pages = require('./pages');
const quizSubmissionUserList = require('./quizSubmissionUserList');
const progress = require('./progress');
const enrollments = require('./enrollments');
const peerReviews = require('./peerReviews');
const contentMigrations = require('./contentMigrations');
const pollSubmissions = require('./pollSubmissions');
const assignmentGroups = require('./assignmentGroups');
const webhooksSubscriptions = require('./webhooksSubscriptions');
const pollChoices = require('./pollChoices');
const submissions = require('./submissions');
const outcomeGroups = require('./outcomeGroups');
const rubrics = require('./rubrics');
const conferences = require('./conferences');
const quizStatistics = require('./quizStatistics');
const sisIntegration = require('./sisIntegration');
const quizReports = require('./quizReports');
const assignments = require('./assignments');
const users = require('./users');
const outcomeImports = require('./outcomeImports');
const courses = require('./courses');
const quizQuestions = require('./quizQuestions');
const discussionTopics = require('./discussionTopics');
const quizzes = require('./quizzes');
const roles = require('./roles');
const accounts = require('./accounts');
const files = require('./files');
const externalTools = require('./externalTools');

module.exports = (helper) => {
  return {
    errorReports: errorReports(helper),
    apiTokenScopes: apiTokenScopes(helper),
    outcomeResults: outcomeResults(helper),
    courseAuditLog: courseAuditLog(helper),
    admins: admins(helper),
    quizExtensions: quizExtensions(helper),
    gradeChangeLog: gradeChangeLog(helper),
    bookmarks: bookmarks(helper),
    brandConfigs: brandConfigs(helper),
    services: services(helper),
    liveAssessments: liveAssessments(helper),
    customGradebookColumns: customGradebookColumns(helper),
    tabs: tabs(helper),
    plannerOverride: plannerOverride(helper),
    plagiarismDetectionSubmissions: plagiarismDetectionSubmissions(helper),
    proficiencyRatings: proficiencyRatings(helper),
    quizQuestionGroups: quizQuestionGroups(helper),
    search: search(helper),
    submissionComments: submissionComments(helper),
    accountReports: accountReports(helper),
    accountNotifications: accountNotifications(helper),
    communicationChannels: communicationChannels(helper),
    announcementExternalFeeds: announcementExternalFeeds(helper),
    collaborations: collaborations(helper),
    gradingStandards: gradingStandards(helper),
    courseQuizExtensions: courseQuizExtensions(helper),
    commMessages: commMessages(helper),
    gradingPeriods: gradingPeriods(helper),
    accountDomainLookups: accountDomainLookups(helper),
    favorites: favorites(helper),
    jwTs: jwTs(helper),
    moderatedGrading: moderatedGrading(helper),
    outcomes: outcomes(helper),
    planner: planner(helper),
    userObservees: userObservees(helper),
    quizSubmissionFiles: quizSubmissionFiles(helper),
    plagiarismDetectionPlatformUsers: plagiarismDetectionPlatformUsers(helper),
    gradebookHistory: gradebookHistory(helper),
    quizAssignmentOverrides: quizAssignmentOverrides(helper),
    plagiarismDetectionPlatformAssignments:
      plagiarismDetectionPlatformAssignments(helper),
    enrollmentTerms: enrollmentTerms(helper),
    logins: logins(helper),
    quizIpFilters: quizIpFilters(helper),
    plannerNote: plannerNote(helper),
    ePubExports: ePubExports(helper),
    quizSubmissionEvents: quizSubmissionEvents(helper),
    sharedBrandConfigs: sharedBrandConfigs(helper),
    sisImportErrors: sisImportErrors(helper),
    pollSessions: pollSessions(helper),
    quizSubmissionQuestions: quizSubmissionQuestions(helper),
    announcements: announcements(helper),
    originalityReports: originalityReports(helper),
    analytics: analytics(helper),
    featureFlags: featureFlags(helper),
    quizSubmissions: quizSubmissions(helper),
    groupCategories: groupCategories(helper),
    authenticationsLog: authenticationsLog(helper),
    notificationPreferences: notificationPreferences(helper),
    contentExports: contentExports(helper),
    sections: sections(helper),
    sisImports: sisImports(helper),
    authenticationProviders: authenticationProviders(helper),
    blueprintCourses: blueprintCourses(helper),
    conversations: conversations(helper),
    latePolicy: latePolicy(helper),
    groups: groups(helper),
    appointmentGroups: appointmentGroups(helper),
    polls: polls(helper),
    calendarEvents: calendarEvents(helper),
    modules: modules(helper),
    pages: pages(helper),
    quizSubmissionUserList: quizSubmissionUserList(helper),
    progress: progress(helper),
    enrollments: enrollments(helper),
    peerReviews: peerReviews(helper),
    contentMigrations: contentMigrations(helper),
    pollSubmissions: pollSubmissions(helper),
    assignmentGroups: assignmentGroups(helper),
    webhooksSubscriptions: webhooksSubscriptions(helper),
    pollChoices: pollChoices(helper),
    submissions: submissions(helper),
    outcomeGroups: outcomeGroups(helper),
    rubrics: rubrics(helper),
    conferences: conferences(helper),
    quizStatistics: quizStatistics(helper),
    sisIntegration: sisIntegration(helper),
    quizReports: quizReports(helper),
    assignments: assignments(helper),
    users: users(helper),
    outcomeImports: outcomeImports(helper),
    courses: courses(helper),
    quizQuestions: quizQuestions(helper),
    discussionTopics: discussionTopics(helper),
    quizzes: quizzes(helper),
    roles: roles(helper),
    accounts: accounts(helper),
    files: files(helper),
    externalTools: externalTools(helper),
  };
};
