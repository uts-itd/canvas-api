"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
const errorReports_1 = __importDefault(require("./errorReports"));
const apiTokenScopes_1 = __importDefault(require("./apiTokenScopes"));
const outcomeResults_1 = __importDefault(require("./outcomeResults"));
const courseAuditLog_1 = __importDefault(require("./courseAuditLog"));
const admins_1 = __importDefault(require("./admins"));
const quizExtensions_1 = __importDefault(require("./quizExtensions"));
const gradeChangeLog_1 = __importDefault(require("./gradeChangeLog"));
const bookmarks_1 = __importDefault(require("./bookmarks"));
const brandConfigs_1 = __importDefault(require("./brandConfigs"));
const services_1 = __importDefault(require("./services"));
const liveAssessments_1 = __importDefault(require("./liveAssessments"));
const customGradebookColumns_1 = __importDefault(require("./customGradebookColumns"));
const tabs_1 = __importDefault(require("./tabs"));
const plannerOverride_1 = __importDefault(require("./plannerOverride"));
const plagiarismDetectionSubmissions_1 = __importDefault(require("./plagiarismDetectionSubmissions"));
const proficiencyRatings_1 = __importDefault(require("./proficiencyRatings"));
const quizQuestionGroups_1 = __importDefault(require("./quizQuestionGroups"));
const search_1 = __importDefault(require("./search"));
const submissionComments_1 = __importDefault(require("./submissionComments"));
const accountReports_1 = __importDefault(require("./accountReports"));
const accountNotifications_1 = __importDefault(require("./accountNotifications"));
const communicationChannels_1 = __importDefault(require("./communicationChannels"));
const announcementExternalFeeds_1 = __importDefault(require("./announcementExternalFeeds"));
const collaborations_1 = __importDefault(require("./collaborations"));
const gradingStandards_1 = __importDefault(require("./gradingStandards"));
const courseQuizExtensions_1 = __importDefault(require("./courseQuizExtensions"));
const commMessages_1 = __importDefault(require("./commMessages"));
const gradingPeriods_1 = __importDefault(require("./gradingPeriods"));
const accountDomainLookups_1 = __importDefault(require("./accountDomainLookups"));
const favorites_1 = __importDefault(require("./favorites"));
const jwTs_1 = __importDefault(require("./jwTs"));
const moderatedGrading_1 = __importDefault(require("./moderatedGrading"));
const outcomes_1 = __importDefault(require("./outcomes"));
const planner_1 = __importDefault(require("./planner"));
const userObservees_1 = __importDefault(require("./userObservees"));
const quizSubmissionFiles_1 = __importDefault(require("./quizSubmissionFiles"));
const plagiarismDetectionPlatformUsers_1 = __importDefault(require("./plagiarismDetectionPlatformUsers"));
const gradebookHistory_1 = __importDefault(require("./gradebookHistory"));
const quizAssignmentOverrides_1 = __importDefault(require("./quizAssignmentOverrides"));
const plagiarismDetectionPlatformAssignments_1 = __importDefault(require("./plagiarismDetectionPlatformAssignments"));
const enrollmentTerms_1 = __importDefault(require("./enrollmentTerms"));
const logins_1 = __importDefault(require("./logins"));
const quizIpFilters_1 = __importDefault(require("./quizIpFilters"));
const plannerNote_1 = __importDefault(require("./plannerNote"));
const ePubExports_1 = __importDefault(require("./ePubExports"));
const quizSubmissionEvents_1 = __importDefault(require("./quizSubmissionEvents"));
const sharedBrandConfigs_1 = __importDefault(require("./sharedBrandConfigs"));
const sisImportErrors_1 = __importDefault(require("./sisImportErrors"));
const pollSessions_1 = __importDefault(require("./pollSessions"));
const quizSubmissionQuestions_1 = __importDefault(require("./quizSubmissionQuestions"));
const announcements_1 = __importDefault(require("./announcements"));
const originalityReports_1 = __importDefault(require("./originalityReports"));
const analytics_1 = __importDefault(require("./analytics"));
const featureFlags_1 = __importDefault(require("./featureFlags"));
const quizSubmissions_1 = __importDefault(require("./quizSubmissions"));
const groupCategories_1 = __importDefault(require("./groupCategories"));
const authenticationsLog_1 = __importDefault(require("./authenticationsLog"));
const notificationPreferences_1 = __importDefault(require("./notificationPreferences"));
const contentExports_1 = __importDefault(require("./contentExports"));
const sections_1 = __importDefault(require("./sections"));
const sisImports_1 = __importDefault(require("./sisImports"));
const authenticationProviders_1 = __importDefault(require("./authenticationProviders"));
const blueprintCourses_1 = __importDefault(require("./blueprintCourses"));
const conversations_1 = __importDefault(require("./conversations"));
const latePolicy_1 = __importDefault(require("./latePolicy"));
const groups_1 = __importDefault(require("./groups"));
const appointmentGroups_1 = __importDefault(require("./appointmentGroups"));
const polls_1 = __importDefault(require("./polls"));
const calendarEvents_1 = __importDefault(require("./calendarEvents"));
const modules_1 = __importDefault(require("./modules"));
const pages_1 = __importDefault(require("./pages"));
const quizSubmissionUserList_1 = __importDefault(require("./quizSubmissionUserList"));
const progress_1 = __importDefault(require("./progress"));
const enrollments_1 = __importDefault(require("./enrollments"));
const peerReviews_1 = __importDefault(require("./peerReviews"));
const contentMigrations_1 = __importDefault(require("./contentMigrations"));
const pollSubmissions_1 = __importDefault(require("./pollSubmissions"));
const assignmentGroups_1 = __importDefault(require("./assignmentGroups"));
const webhooksSubscriptions_1 = __importDefault(require("./webhooksSubscriptions"));
const pollChoices_1 = __importDefault(require("./pollChoices"));
const submissions_1 = __importDefault(require("./submissions"));
const outcomeGroups_1 = __importDefault(require("./outcomeGroups"));
const rubrics_1 = __importDefault(require("./rubrics"));
const conferences_1 = __importDefault(require("./conferences"));
const quizStatistics_1 = __importDefault(require("./quizStatistics"));
const sisIntegration_1 = __importDefault(require("./sisIntegration"));
const quizReports_1 = __importDefault(require("./quizReports"));
const assignments_1 = __importDefault(require("./assignments"));
const users_1 = __importDefault(require("./users"));
const outcomeImports_1 = __importDefault(require("./outcomeImports"));
const courses_1 = __importDefault(require("./courses"));
const quizQuestions_1 = __importDefault(require("./quizQuestions"));
const discussionTopics_1 = __importDefault(require("./discussionTopics"));
const quizzes_1 = __importDefault(require("./quizzes"));
const roles_1 = __importDefault(require("./roles"));
const accounts_1 = __importDefault(require("./accounts"));
const files_1 = __importDefault(require("./files"));
const externalTools_1 = __importDefault(require("./externalTools"));
function getRoutes(helper) {
    return {
        errorReports: (0, errorReports_1.default)(helper),
        apiTokenScopes: (0, apiTokenScopes_1.default)(helper),
        outcomeResults: (0, outcomeResults_1.default)(helper),
        courseAuditLog: (0, courseAuditLog_1.default)(helper),
        admins: (0, admins_1.default)(helper),
        quizExtensions: (0, quizExtensions_1.default)(helper),
        gradeChangeLog: (0, gradeChangeLog_1.default)(helper),
        bookmarks: (0, bookmarks_1.default)(helper),
        brandConfigs: (0, brandConfigs_1.default)(helper),
        services: (0, services_1.default)(helper),
        liveAssessments: (0, liveAssessments_1.default)(helper),
        customGradebookColumns: (0, customGradebookColumns_1.default)(helper),
        tabs: (0, tabs_1.default)(helper),
        plannerOverride: (0, plannerOverride_1.default)(helper),
        plagiarismDetectionSubmissions: (0, plagiarismDetectionSubmissions_1.default)(helper),
        proficiencyRatings: (0, proficiencyRatings_1.default)(helper),
        quizQuestionGroups: (0, quizQuestionGroups_1.default)(helper),
        search: (0, search_1.default)(helper),
        submissionComments: (0, submissionComments_1.default)(helper),
        accountReports: (0, accountReports_1.default)(helper),
        accountNotifications: (0, accountNotifications_1.default)(helper),
        communicationChannels: (0, communicationChannels_1.default)(helper),
        announcementExternalFeeds: (0, announcementExternalFeeds_1.default)(helper),
        collaborations: (0, collaborations_1.default)(helper),
        gradingStandards: (0, gradingStandards_1.default)(helper),
        courseQuizExtensions: (0, courseQuizExtensions_1.default)(helper),
        commMessages: (0, commMessages_1.default)(helper),
        gradingPeriods: (0, gradingPeriods_1.default)(helper),
        accountDomainLookups: (0, accountDomainLookups_1.default)(helper),
        favorites: (0, favorites_1.default)(helper),
        jwTs: (0, jwTs_1.default)(helper),
        moderatedGrading: (0, moderatedGrading_1.default)(helper),
        outcomes: (0, outcomes_1.default)(helper),
        planner: (0, planner_1.default)(helper),
        userObservees: (0, userObservees_1.default)(helper),
        quizSubmissionFiles: (0, quizSubmissionFiles_1.default)(helper),
        plagiarismDetectionPlatformUsers: (0, plagiarismDetectionPlatformUsers_1.default)(helper),
        gradebookHistory: (0, gradebookHistory_1.default)(helper),
        quizAssignmentOverrides: (0, quizAssignmentOverrides_1.default)(helper),
        plagiarismDetectionPlatformAssignments: (0, plagiarismDetectionPlatformAssignments_1.default)(helper),
        enrollmentTerms: (0, enrollmentTerms_1.default)(helper),
        logins: (0, logins_1.default)(helper),
        quizIpFilters: (0, quizIpFilters_1.default)(helper),
        plannerNote: (0, plannerNote_1.default)(helper),
        ePubExports: (0, ePubExports_1.default)(helper),
        quizSubmissionEvents: (0, quizSubmissionEvents_1.default)(helper),
        sharedBrandConfigs: (0, sharedBrandConfigs_1.default)(helper),
        sisImportErrors: (0, sisImportErrors_1.default)(helper),
        pollSessions: (0, pollSessions_1.default)(helper),
        quizSubmissionQuestions: (0, quizSubmissionQuestions_1.default)(helper),
        announcements: (0, announcements_1.default)(helper),
        originalityReports: (0, originalityReports_1.default)(helper),
        analytics: (0, analytics_1.default)(helper),
        featureFlags: (0, featureFlags_1.default)(helper),
        quizSubmissions: (0, quizSubmissions_1.default)(helper),
        groupCategories: (0, groupCategories_1.default)(helper),
        authenticationsLog: (0, authenticationsLog_1.default)(helper),
        notificationPreferences: (0, notificationPreferences_1.default)(helper),
        contentExports: (0, contentExports_1.default)(helper),
        sections: (0, sections_1.default)(helper),
        sisImports: (0, sisImports_1.default)(helper),
        authenticationProviders: (0, authenticationProviders_1.default)(helper),
        blueprintCourses: (0, blueprintCourses_1.default)(helper),
        conversations: (0, conversations_1.default)(helper),
        latePolicy: (0, latePolicy_1.default)(helper),
        groups: (0, groups_1.default)(helper),
        appointmentGroups: (0, appointmentGroups_1.default)(helper),
        polls: (0, polls_1.default)(helper),
        calendarEvents: (0, calendarEvents_1.default)(helper),
        modules: (0, modules_1.default)(helper),
        pages: (0, pages_1.default)(helper),
        quizSubmissionUserList: (0, quizSubmissionUserList_1.default)(helper),
        progress: (0, progress_1.default)(helper),
        enrollments: (0, enrollments_1.default)(helper),
        peerReviews: (0, peerReviews_1.default)(helper),
        contentMigrations: (0, contentMigrations_1.default)(helper),
        pollSubmissions: (0, pollSubmissions_1.default)(helper),
        assignmentGroups: (0, assignmentGroups_1.default)(helper),
        webhooksSubscriptions: (0, webhooksSubscriptions_1.default)(helper),
        pollChoices: (0, pollChoices_1.default)(helper),
        submissions: (0, submissions_1.default)(helper),
        outcomeGroups: (0, outcomeGroups_1.default)(helper),
        rubrics: (0, rubrics_1.default)(helper),
        conferences: (0, conferences_1.default)(helper),
        quizStatistics: (0, quizStatistics_1.default)(helper),
        sisIntegration: (0, sisIntegration_1.default)(helper),
        quizReports: (0, quizReports_1.default)(helper),
        assignments: (0, assignments_1.default)(helper),
        users: (0, users_1.default)(helper),
        outcomeImports: (0, outcomeImports_1.default)(helper),
        courses: (0, courses_1.default)(helper),
        quizQuestions: (0, quizQuestions_1.default)(helper),
        discussionTopics: (0, discussionTopics_1.default)(helper),
        quizzes: (0, quizzes_1.default)(helper),
        roles: (0, roles_1.default)(helper),
        accounts: (0, accounts_1.default)(helper),
        files: (0, files_1.default)(helper),
        externalTools: (0, externalTools_1.default)(helper),
    };
}
exports.getRoutes = getRoutes;
