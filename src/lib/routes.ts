import errorReports from './errorReports';
import apiTokenScopes from './apiTokenScopes';
import outcomeResults from './outcomeResults';
import courseAuditLog from './courseAuditLog';
import admins from './admins';
import quizExtensions from './quizExtensions';
import gradeChangeLog from './gradeChangeLog';
import bookmarks from './bookmarks';
import brandConfigs from './brandConfigs';
import services from './services';
import liveAssessments from './liveAssessments';
import customGradebookColumns from './customGradebookColumns';
import tabs from './tabs';
import plannerOverride from './plannerOverride';
import plagiarismDetectionSubmissions from './plagiarismDetectionSubmissions';
import proficiencyRatings from './proficiencyRatings';
import quizQuestionGroups from './quizQuestionGroups';
import search from './search';
import submissionComments from './submissionComments';
import accountReports from './accountReports';
import accountNotifications from './accountNotifications';
import communicationChannels from './communicationChannels';
import announcementExternalFeeds from './announcementExternalFeeds';
import collaborations from './collaborations';
import gradingStandards from './gradingStandards';
import courseQuizExtensions from './courseQuizExtensions';
import commMessages from './commMessages';
import gradingPeriods from './gradingPeriods';
import accountDomainLookups from './accountDomainLookups';
import favorites from './favorites';
import jwTs from './jwTs';
import moderatedGrading from './moderatedGrading';
import outcomes from './outcomes';
import planner from './planner';
import userObservees from './userObservees';
import quizSubmissionFiles from './quizSubmissionFiles';
import plagiarismDetectionPlatformUsers from './plagiarismDetectionPlatformUsers';
import gradebookHistory from './gradebookHistory';
import quizAssignmentOverrides from './quizAssignmentOverrides';
import plagiarismDetectionPlatformAssignments from './plagiarismDetectionPlatformAssignments';
import enrollmentTerms from './enrollmentTerms';
import logins from './logins';
import quizIpFilters from './quizIpFilters';
import plannerNote from './plannerNote';
import ePubExports from './ePubExports';
import quizSubmissionEvents from './quizSubmissionEvents';
import sharedBrandConfigs from './sharedBrandConfigs';
import sisImportErrors from './sisImportErrors';
import pollSessions from './pollSessions';
import quizSubmissionQuestions from './quizSubmissionQuestions';
import announcements from './announcements';
import originalityReports from './originalityReports';
import analytics from './analytics';
import featureFlags from './featureFlags';
import quizSubmissions from './quizSubmissions';
import groupCategories from './groupCategories';
import authenticationsLog from './authenticationsLog';
import notificationPreferences from './notificationPreferences';
import contentExports from './contentExports';
import sections from './sections';
import sisImports from './sisImports';
import authenticationProviders from './authenticationProviders';
import blueprintCourses from './blueprintCourses';
import conversations from './conversations';
import latePolicy from './latePolicy';
import groups from './groups';
import appointmentGroups from './appointmentGroups';
import polls from './polls';
import calendarEvents from './calendarEvents';
import modules from './modules';
import pages from './pages';
import quizSubmissionUserList from './quizSubmissionUserList';
import progress from './progress';
import enrollments from './enrollments';
import peerReviews from './peerReviews';
import contentMigrations from './contentMigrations';
import pollSubmissions from './pollSubmissions';
import assignmentGroups from './assignmentGroups';
import webhooksSubscriptions from './webhooksSubscriptions';
import pollChoices from './pollChoices';
import submissions from './submissions';
import outcomeGroups from './outcomeGroups';
import rubrics from './rubrics';
import conferences from './conferences';
import quizStatistics from './quizStatistics';
import sisIntegration from './sisIntegration';
import quizReports from './quizReports';
import assignments from './assignments';
import users from './users';
import outcomeImports from './outcomeImports';
import courses from './courses';
import quizQuestions from './quizQuestions';
import discussionTopics from './discussionTopics';
import quizzes from './quizzes';
import roles from './roles';
import accounts from './accounts';
import files from './files';
import externalTools from './externalTools';
import { Helper } from '../helper';

export function getRoutes(helper: Helper) {
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
    plagiarismDetectionPlatformAssignments: plagiarismDetectionPlatformAssignments(helper),
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
}

// Force typscript to reference each routes definition file so they are used for tooltips
export type Routes = {
  errorReports: ReturnType<typeof errorReports>;
  apiTokenScopes: ReturnType<typeof apiTokenScopes>;
  outcomeResults: ReturnType<typeof outcomeResults>;
  courseAuditLog: ReturnType<typeof courseAuditLog>;
  admins: ReturnType<typeof admins>;
  quizExtensions: ReturnType<typeof quizExtensions>;
  gradeChangeLog: ReturnType<typeof gradeChangeLog>;
  bookmarks: ReturnType<typeof bookmarks>;
  brandConfigs: ReturnType<typeof brandConfigs>;
  services: ReturnType<typeof services>;
  liveAssessments: ReturnType<typeof liveAssessments>;
  customGradebookColumns: ReturnType<typeof customGradebookColumns>;
  tabs: ReturnType<typeof tabs>;
  plannerOverride: ReturnType<typeof plannerOverride>;
  plagiarismDetectionSubmissions: ReturnType<typeof plagiarismDetectionSubmissions>;
  proficiencyRatings: ReturnType<typeof proficiencyRatings>;
  quizQuestionGroups: ReturnType<typeof quizQuestionGroups>;
  search: ReturnType<typeof search>;
  submissionComments: ReturnType<typeof submissionComments>;
  accountReports: ReturnType<typeof accountReports>;
  accountNotifications: ReturnType<typeof accountNotifications>;
  communicationChannels: ReturnType<typeof communicationChannels>;
  announcementExternalFeeds: ReturnType<typeof announcementExternalFeeds>;
  collaborations: ReturnType<typeof collaborations>;
  gradingStandards: ReturnType<typeof gradingStandards>;
  courseQuizExtensions: ReturnType<typeof courseQuizExtensions>;
  commMessages: ReturnType<typeof commMessages>;
  gradingPeriods: ReturnType<typeof gradingPeriods>;
  accountDomainLookups: ReturnType<typeof accountDomainLookups>;
  favorites: ReturnType<typeof favorites>;
  jwTs: ReturnType<typeof jwTs>;
  moderatedGrading: ReturnType<typeof moderatedGrading>;
  outcomes: ReturnType<typeof outcomes>;
  planner: ReturnType<typeof planner>;
  userObservees: ReturnType<typeof userObservees>;
  quizSubmissionFiles: ReturnType<typeof quizSubmissionFiles>;
  plagiarismDetectionPlatformUsers: ReturnType<typeof plagiarismDetectionPlatformUsers>;
  gradebookHistory: ReturnType<typeof gradebookHistory>;
  quizAssignmentOverrides: ReturnType<typeof quizAssignmentOverrides>;
  plagiarismDetectionPlatformAssignments: ReturnType<typeof plagiarismDetectionPlatformAssignments>;
  enrollmentTerms: ReturnType<typeof enrollmentTerms>;
  logins: ReturnType<typeof logins>;
  quizIpFilters: ReturnType<typeof quizIpFilters>;
  plannerNote: ReturnType<typeof plannerNote>;
  ePubExports: ReturnType<typeof ePubExports>;
  quizSubmissionEvents: ReturnType<typeof quizSubmissionEvents>;
  sharedBrandConfigs: ReturnType<typeof sharedBrandConfigs>;
  sisImportErrors: ReturnType<typeof sisImportErrors>;
  pollSessions: ReturnType<typeof pollSessions>;
  quizSubmissionQuestions: ReturnType<typeof quizSubmissionQuestions>;
  announcements: ReturnType<typeof announcements>;
  originalityReports: ReturnType<typeof originalityReports>;
  analytics: ReturnType<typeof analytics>;
  featureFlags: ReturnType<typeof featureFlags>;
  quizSubmissions: ReturnType<typeof quizSubmissions>;
  groupCategories: ReturnType<typeof groupCategories>;
  authenticationsLog: ReturnType<typeof authenticationsLog>;
  notificationPreferences: ReturnType<typeof notificationPreferences>;
  contentExports: ReturnType<typeof contentExports>;
  sections: ReturnType<typeof sections>;
  sisImports: ReturnType<typeof sisImports>;
  authenticationProviders: ReturnType<typeof authenticationProviders>;
  blueprintCourses: ReturnType<typeof blueprintCourses>;
  conversations: ReturnType<typeof conversations>;
  latePolicy: ReturnType<typeof latePolicy>;
  groups: ReturnType<typeof groups>;
  appointmentGroups: ReturnType<typeof appointmentGroups>;
  polls: ReturnType<typeof polls>;
  calendarEvents: ReturnType<typeof calendarEvents>;
  modules: ReturnType<typeof modules>;
  pages: ReturnType<typeof pages>;
  quizSubmissionUserList: ReturnType<typeof quizSubmissionUserList>;
  progress: ReturnType<typeof progress>;
  enrollments: ReturnType<typeof enrollments>;
  peerReviews: ReturnType<typeof peerReviews>;
  contentMigrations: ReturnType<typeof contentMigrations>;
  pollSubmissions: ReturnType<typeof pollSubmissions>;
  assignmentGroups: ReturnType<typeof assignmentGroups>;
  webhooksSubscriptions: ReturnType<typeof webhooksSubscriptions>;
  pollChoices: ReturnType<typeof pollChoices>;
  submissions: ReturnType<typeof submissions>;
  outcomeGroups: ReturnType<typeof outcomeGroups>;
  rubrics: ReturnType<typeof rubrics>;
  conferences: ReturnType<typeof conferences>;
  quizStatistics: ReturnType<typeof quizStatistics>;
  sisIntegration: ReturnType<typeof sisIntegration>;
  quizReports: ReturnType<typeof quizReports>;
  assignments: ReturnType<typeof assignments>;
  users: ReturnType<typeof users>;
  outcomeImports: ReturnType<typeof outcomeImports>;
  courses: ReturnType<typeof courses>;
  quizQuestions: ReturnType<typeof quizQuestions>;
  discussionTopics: ReturnType<typeof discussionTopics>;
  quizzes: ReturnType<typeof quizzes>;
  roles: ReturnType<typeof roles>;
  accounts: ReturnType<typeof accounts>;
  files: ReturnType<typeof files>;
  externalTools: ReturnType<typeof externalTools>;
};
