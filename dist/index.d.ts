declare function _exports(domain: any, token: any): {
    errorReports: {
        createErrorReport: (body: any) => Promise<any>;
    };
    apiTokenScopes: {
        listScopes: (accountId: string, query?: any) => Promise<any>;
    };
    outcomeResults: {
        getOutcomeResults: (courseId: string, query?: any) => Promise<any>;
        getOutcomeResultRollups: (courseId: string, query?: any) => Promise<any>;
    };
    courseAuditLog: {
        queryByCourse: (courseId: string, query?: any) => Promise<any>;
    };
    admins: {
        makeAccountAdmin: (accountId: string, body: any) => Promise<any>;
        removeAccountAdmin: (accountId: string, userId: string, query?: any) => Promise<any>;
        listAccountAdmins: (accountId: string, query?: any) => Promise<any>;
    };
    quizExtensions: {
        setExtensionsForStudentQuizSubmissions: (courseId: string, quizId: string, body: any) => Promise<any>;
    };
    gradeChangeLog: {
        queryByAssignment: (assignmentId: string, query?: any) => Promise<any>;
        queryByCourse: (courseId: string, query?: any) => Promise<any>;
        queryByStudent: (studentId: string, query?: any) => Promise<any>;
        queryByGrader: (graderId: string, query?: any) => Promise<any>;
    };
    bookmarks: {
        listBookmarks: () => Promise<any>;
        createBookmark: (body: any) => Promise<any>;
        getBookmark: (bookmarkId: string) => Promise<any>;
        updateBookmark: (bookmarkId: string, body: any) => Promise<any>;
        deleteBookmark: (bookmarkId: string) => Promise<any>;
    };
    brandConfigs: {
        getBrandConfigVariablesThatShouldBeUsedForThisDomain: () => Promise<any>;
    };
    services: {
        getKalturaConfig: () => Promise<any>;
        startKalturaSession: () => Promise<any>;
    };
    liveAssessments: {
        createLiveAssessmentResults: (courseId: string, assessmentId: string) => Promise<any>;
        listLiveAssessmentResults: (courseId: string, assessmentId: string, query?: any) => Promise<any>;
        createOrFindLiveAssessment: (courseId: string) => Promise<any>;
        listLiveAssessments: (courseId: string) => Promise<any>;
    };
    customGradebookColumns: {
        listCustomGradebookColumns: (courseId: string, query?: any) => Promise<any>;
        createCustomGradebookColumn: (courseId: string, body: any) => Promise<any>;
        updateCustomGradebookColumn: (courseId: string, customGradebookColumnId: string) => Promise<any>;
        deleteCustomGradebookColumn: (courseId: string, customGradebookColumnId: string) => Promise<any>;
        reorderCustomColumns: (courseId: string, body: any) => Promise<any>;
        listEntriesForColumn: (courseId: string, customGradebookColumnId: string, query?: any) => Promise<any>;
        updateColumnData: (courseId: string, customGradebookColumnId: string, userId: string, body: any) => Promise<any>;
    };
    tabs: {
        listAvailableTabsForCourseOrGroupCourses: (courseId: string, query?: any) => Promise<any>;
        listAvailableTabsForCourseOrGroupGroups: (groupId: string, query?: any) => Promise<any>;
        updateTabForCourse: (courseId: string, tabId: string, body: any) => Promise<any>;
    };
    plannerOverride: {
        listPlannerOverrides: () => Promise<any>;
        showPlannerOverride: (overrideId: string) => Promise<any>;
        updatePlannerOverride: (overrideId: string, body: any) => Promise<any>;
        createPlannerOverride: (body: any) => Promise<any>;
        deletePlannerOverride: (overrideId: string) => Promise<any>;
    };
    plagiarismDetectionSubmissions: {
        getSingleSubmission: (assignmentId: string, submissionId: string) => Promise<any>;
        getHistoryOfSingleSubmission: (assignmentId: string, submissionId: string) => Promise<any>;
    };
    proficiencyRatings: {
        createUpdateProficiencyRatings: (accountId: string, body: any) => Promise<any>;
        getProficiencyRatings: (accountId: string) => Promise<any>;
    };
    quizQuestionGroups: {
        getSingleQuizGroup: (courseId: string, quizId: string, groupId: string) => Promise<any>;
        createQuestionGroup: (courseId: string, quizId: string, body: any) => Promise<any>;
        updateQuestionGroup: (courseId: string, quizId: string, groupId: string, body: any) => Promise<any>;
        deleteQuestionGroup: (courseId: string, quizId: string, groupId: string) => Promise<any>;
        reorderQuestionGroups: (courseId: string, quizId: string, groupId: string, body: any) => Promise<any>;
    };
    search: {
        findRecipientsConversations: (query?: any) => Promise<any>;
        findRecipientsSearch: (query?: any) => Promise<any>;
        listAllCourses: (query?: any) => Promise<any>;
    };
    submissionComments: {
        uploadFile: (courseId: string, assignmentId: string, userId: string) => Promise<any>;
    };
    accountReports: {
        listAvailableReports: (accountId: string) => Promise<any>;
        startReport: (accountId: string, report: string, body: any) => Promise<any>;
        indexOfReports: (accountId: string, report: string) => Promise<any>;
        statusOfReport: (accountId: string, report: string, reportId: string) => Promise<any>;
        deleteReport: (accountId: string, report: string, reportId: string) => Promise<any>;
    };
    accountNotifications: {
        indexOfActiveGlobalNotificationForUser: (accountId: string) => Promise<any>;
        showGlobalNotification: (accountId: string, accountNotificationId: string) => Promise<any>;
        closeNotificationForUser: (accountId: string, accountNotificationId: string) => Promise<any>;
        createGlobalNotification: (accountId: string, body: any) => Promise<any>;
        updateGlobalNotification: (accountId: string, accountNotificationId: string, body: any) => Promise<any>;
    };
    communicationChannels: {
        listUserCommunicationChannels: (userId: string) => Promise<any>;
        createCommunicationChannel: (userId: string, body: any) => Promise<any>;
        deleteCommunicationChannelId: (userId: string, communicationChannelId: string) => Promise<any>;
        deleteCommunicationChannelType: (userId: string, type: string, address: string) => Promise<any>;
        deletePushNotificationEndpoint: () => Promise<{
            success: true;
        }>;
    };
    announcementExternalFeeds: {
        listExternalFeedsCourses: (courseId: string) => Promise<any>;
        listExternalFeedsGroups: (groupId: string) => Promise<any>;
        createExternalFeedCourses: (courseId: string, body: any) => Promise<any>;
        createExternalFeedGroups: (groupId: string, body: any) => Promise<any>;
        deleteExternalFeedCourses: (courseId: string, externalFeedId: string) => Promise<any>;
        deleteExternalFeedGroups: (groupId: string, externalFeedId: string) => Promise<any>;
    };
    collaborations: {
        listCollaborationsCourses: (courseId: string) => Promise<any>;
        listCollaborationsGroups: (groupId: string) => Promise<any>;
        listMembersOfCollaboration: (collaborationId: string, query?: any) => Promise<any>;
        listPotentialMembersCourses: (courseId: string) => Promise<any>;
        listPotentialMembersGroups: (groupId: string) => Promise<any>;
    };
    gradingStandards: {
        createNewGradingStandardAccounts: (accountId: string, body: any) => Promise<any>;
        createNewGradingStandardCourses: (courseId: string, body: any) => Promise<any>;
        listGradingStandardsAvailableInContextCourses: (courseId: string) => Promise<any>;
        listGradingStandardsAvailableInContextAccounts: (accountId: string) => Promise<any>;
        getSingleGradingStandardInContextCourses: (courseId: string, gradingStandardId: string) => Promise<any>;
        getSingleGradingStandardInContextAccounts: (accountId: string, gradingStandardId: string) => Promise<any>;
    };
    courseQuizExtensions: {
        setExtensionsForStudentQuizSubmissions: (courseId: string, body: any) => Promise<any>;
    };
    commMessages: {
        listOfCommmessagesForUser: (query: any) => Promise<any>;
    };
    gradingPeriods: {
        listGradingPeriodsAccounts: (accountId: string) => Promise<any>;
        listGradingPeriodsCourses: (courseId: string) => Promise<any>;
        getSingleGradingPeriod: (courseId: string, gradingPeriodId: string) => Promise<any>;
        updateSingleGradingPeriod: (courseId: string, gradingPeriodId: string, body: any) => Promise<any>;
        deleteGradingPeriodCourses: (courseId: string, gradingPeriodId: string) => Promise<any>;
        deleteGradingPeriodAccounts: (accountId: string, gradingPeriodId: string) => Promise<any>;
    };
    accountDomainLookups: {
        searchAccountDomains: (query?: any) => Promise<any>;
    };
    favorites: {
        listFavoriteCourses: (query?: any) => Promise<any>;
        listFavoriteGroups: () => Promise<any>;
        addCourseToFavorites: (courseId: string) => Promise<any>;
        addGroupToFavorites: (groupId: string) => Promise<any>;
        removeCourseFromFavorites: (courseId: string) => Promise<any>;
        removeGroupFromFavorites: (groupId: string) => Promise<any>;
        resetCourseFavorites: () => Promise<any>;
        resetGroupFavorites: () => Promise<any>;
    };
    jwTs: {
        createJwt: () => Promise<any>;
        refreshJwt: (body: any) => Promise<any>;
    };
    moderatedGrading: {
        listStudentsSelectedForModeration: (courseId: string, assignmentId: string) => Promise<any>;
        selectStudentsForModeration: (courseId: string, assignmentId: string, body: any) => Promise<any>;
        showProvisionalGradeStatusForStudent: (courseId: string, assignmentId: string, query?: any) => Promise<any>;
        selectProvisionalGrade: (courseId: string, assignmentId: string, provisionalGradeId: string) => Promise<any>;
        copyProvisionalGrade: (courseId: string, assignmentId: string, provisionalGradeId: string) => Promise<any>;
        publishProvisionalGradesForAssignment: (courseId: string, assignmentId: string) => Promise<any>;
        anonymousProvisionalGrades: (courseId: string, assignmentId: string, query?: any) => Promise<any>;
    };
    outcomes: {
        showOutcome: (outcomeId: string) => Promise<any>;
        updateOutcome: (outcomeId: string, body: any) => Promise<any>;
    };
    planner: {
        listPlannerItems: (query?: any) => Promise<any>;
    };
    userObservees: {
        listObservees: (userId: string, query?: any) => Promise<any>;
        addObserveeWithCredentials: (userId: string, body: any) => Promise<any>;
        showObservee: (userId: string, observeeId: string) => Promise<any>;
        addObservee: (userId: string, observeeId: string, body: any) => Promise<any>;
        removeObservee: (userId: string, observeeId: string, query?: any) => Promise<any>;
    };
    quizSubmissionFiles: {
        uploadFile: (courseId: string, quizId: string, body: any) => Promise<any>;
    };
    plagiarismDetectionPlatformUsers: {
        getSingleUserLti: (userId: string) => Promise<any>;
        getAllUsersInGroupLti: (groupId: string) => Promise<any>;
    };
    gradebookHistory: {
        daysInGradebookHistoryForThisCourse: (courseId: any) => Promise<any>;
        detailsForGivenDateInGradebookHistoryForThisCourse: (courseId: any, date: string) => Promise<any>;
        listsSubmissions: (courseId: any, date: string, graderId: any, assignmentId: any) => Promise<any>;
        listUncollatedSubmissionVersions: (courseId: any, query?: any) => Promise<any>;
    };
    quizAssignmentOverrides: {
        retrieveAssignmentOverriddenDatesForQuizzes: (courseId: string, query?: any) => Promise<any>;
    };
    plagiarismDetectionPlatformAssignments: {
        getSingleAssignmentLti: (assignmentId: string, query?: any) => Promise<any>;
    };
    enrollmentTerms: {
        createEnrollmentTerm: (accountId: string, body: any) => Promise<any>;
        updateEnrollmentTerm: (accountId: string, termId: string, body: any) => Promise<any>;
        deleteEnrollmentTerm: (accountId: string, termId: string) => Promise<any>;
        listEnrollmentTerms: (accountId: string, query?: any) => Promise<any>;
    };
    logins: {
        listUserLoginsAccounts: (accountId: string) => Promise<any>;
        listUserLoginsUsers: (userId: string) => Promise<any>;
        createUserLogin: (accountId: string, body: any) => Promise<any>;
        editUserLogin: (accountId: string, loginId: string, body: any) => Promise<any>;
        deleteUserLogin: (userId: string, loginId: string) => Promise<any>;
    };
    quizIpFilters: {
        getAvailableQuizIpFilters: (courseId: string, quizId: string) => Promise<any>;
    };
    plannerNote: {
        listPlannerNotes: (query?: any) => Promise<any>;
        showPlannernote: (plannerNoteId: string) => Promise<any>;
        updatePlannernote: (plannerNoteId: string, body: any) => Promise<any>;
        createPlannerNote: (body: any) => Promise<any>;
        deletePlannerNote: (plannerNoteId: string) => Promise<any>;
    };
    ePubExports: {
        listCoursesWithTheirLatestEpubExport: () => Promise<any>;
        createEpubExport: (courseId: string) => Promise<any>;
        showEpubExport: (courseId: string, epubExportId: string) => Promise<any>;
    };
    quizSubmissionEvents: {
        submitCapturedEvents: (courseId: string, quizId: string, submissionId: string, body: any) => Promise<any>;
        retrieveCapturedEvents: (courseId: string, quizId: string, submissionId: string, query?: any) => Promise<any>;
    };
    sharedBrandConfigs: {
        shareBrandconfigTheme: (accountId: string, body: any) => Promise<any>;
        updateSharedTheme: (accountId: string, sharedBrandConfigId: string) => Promise<any>;
        unShareBrandconfigTheme: (sharedBrandConfigId: string) => Promise<any>;
    };
    sisImportErrors: {
        getSisImportErrorListSisImports: (accountId: string, sisImportId: string) => Promise<any>;
        getSisImportErrorListSisImportErrors: (accountId: string) => Promise<any>;
    };
    pollSessions: {
        listPollSessionsForPoll: (pollId: string) => Promise<any>;
        getResultsForSinglePollSession: (pollId: string, pollSessionId: string) => Promise<any>;
        createSinglePollSession: (pollId: string, body: any) => Promise<any>;
        updateSinglePollSession: (pollId: string, pollSessionId: string, body: any) => Promise<any>;
        deletePollSession: (pollId: string, pollSessionId: string) => Promise<any>;
        openPollSession: (pollId: string, pollSessionId: string) => Promise<any>;
        closeOpenedPollSession: (pollId: string, pollSessionId: string) => Promise<any>;
        listOpenedPollSessions: () => Promise<any>;
        listClosedPollSessions: () => Promise<any>;
    };
    quizSubmissionQuestions: {
        getAllQuizSubmissionQuestions: (quizSubmissionId: string, query?: any) => Promise<any>;
        answeringQuestions: (quizSubmissionId: string, body: any) => Promise<any>;
        flaggingQuestion: (quizSubmissionId: string, questionId: string, body: any) => Promise<any>;
        unflaggingQuestion: (quizSubmissionId: string, questionId: string, body: any) => Promise<any>;
    };
    announcements: {
        listAnnouncements: (query: any) => Promise<any>;
    };
    originalityReports: {
        createOriginalityReport: (assignmentId: string, submissionId: string, body: any) => Promise<any>;
        editOriginalityReportSubmissions: (assignmentId: string, submissionId: string, originalityReporId: string, body: any) => Promise<any>;
        editOriginalityReportFiles: (assignmentId: string, fileId: string, body: any) => Promise<any>;
        showOriginalityReportSubmissions: (assignmentId: string, submissionId: string, originalityReporId: string) => Promise<any>;
        showOriginalityReportFiles: (assignmentId: string, fileId: string) => Promise<any>;
    };
    analytics: {
        getDepartmentLevelParticipationDataTerms: (accountId: string, termId: string) => Promise<any>;
        getDepartmentLevelParticipationDataCurrent: (accountId: string) => Promise<any>;
        getDepartmentLevelParticipationDataCompleted: (accountId: string) => Promise<any>;
        getDepartmentLevelGradeDataTerms: (accountId: string, termId: string) => Promise<any>;
        getDepartmentLevelGradeDataCurrent: (accountId: string) => Promise<any>;
        getDepartmentLevelGradeDataCompleted: (accountId: string) => Promise<any>;
        getDepartmentLevelStatisticsTerms: (accountId: string, termId: string) => Promise<any>;
        getDepartmentLevelStatisticsCurrent: (accountId: string) => Promise<any>;
        getDepartmentLevelStatisticsCompleted: (accountId: string) => Promise<any>;
        getCourseLevelParticipationData: (courseId: string) => Promise<any>;
        getCourseLevelAssignmentData: (courseId: string, query?: any) => Promise<any>;
        getCourseLevelStudentSummaryData: (courseId: string, query?: any) => Promise<any>;
        getUserInACourseLevelParticipationData: (courseId: string, studentId: string) => Promise<any>;
        getUserInACourseLevelAssignmentData: (courseId: string, studentId: string) => Promise<any>;
        getUserInACourseLevelMessagingData: (courseId: string, studentId: string) => Promise<any>;
    };
    featureFlags: {
        listFeaturesCourses: (courseId: string) => Promise<any>;
        listFeaturesAccounts: (accountId: string) => Promise<any>;
        listFeaturesUsers: (userId: string) => Promise<any>;
        listEnabledFeaturesCourses: (courseId: string) => Promise<any>;
        listEnabledFeaturesAccounts: (accountId: string) => Promise<any>;
        listEnabledFeaturesUsers: (userId: string) => Promise<any>;
        getFeatureFlagCourses: (courseId: string, feature: string) => Promise<any>;
        getFeatureFlagAccounts: (accountId: string, feature: string) => Promise<any>;
        getFeatureFlagUsers: (userId: string, feature: string) => Promise<any>;
        setFeatureFlagCourses: (courseId: string, feature: string, body: any) => Promise<any>;
        setFeatureFlagAccounts: (accountId: string, feature: string, body: any) => Promise<any>;
        setFeatureFlagUsers: (userId: string, feature: string, body: any) => Promise<any>;
        removeFeatureFlagCourses: (courseId: string, feature: string) => Promise<any>;
        removeFeatureFlagAccounts: (accountId: string, feature: string) => Promise<any>;
        removeFeatureFlagUsers: (userId: string, feature: string) => Promise<any>;
    };
    quizSubmissions: {
        getAllQuizSubmissions: (courseId: string, quizId: string, query?: any) => Promise<any>;
        getQuizSubmission: (courseId: string, quizId: string, query?: any) => Promise<any>;
        getSingleQuizSubmission: (courseId: string, quizId: string, submissionId: string, query?: any) => Promise<any>;
        createQuizSubmissionStartQuizTakingSession: (courseId: string, quizId: string, body: any) => Promise<any>;
        updateStudentQuestionScoresAndComments: (courseId: string, quizId: string, submissionId: string, body: any) => Promise<any>;
        completeQuizSubmissionTurnItIn: (courseId: string, quizId: string, submissionId: string, body: any) => Promise<any>;
        getCurrentQuizSubmissionTimes: (courseId: string, quizId: string, submissionId: string) => Promise<any>;
    };
    groupCategories: {
        listGroupCategoriesForContextAccounts: (accountId: string) => Promise<any>;
        listGroupCategoriesForContextCourses: (courseId: string) => Promise<any>;
        getSingleGroupCategory: (groupCategoryId: string) => Promise<any>;
        createGroupCategoryAccounts: (accountId: string, body: any) => Promise<any>;
        createGroupCategoryCourses: (courseId: string, body: any) => Promise<any>;
        updateGroupCategory: (groupCategoryId: string, body: any) => Promise<any>;
        deleteGroupCategory: (groupCategoryId: string) => Promise<any>;
        listGroupsInGroupCategory: (groupCategoryId: string) => Promise<any>;
        listUsersInGroupCategory: (groupCategoryId: string, query?: any) => Promise<any>;
        assignUnassignedMembers: (groupCategoryId: string, body: any) => Promise<any>;
    };
    authenticationsLog: {
        queryByLogin: (loginId: string, query?: any) => Promise<any>;
        queryByAccount: (accountId: string, query?: any) => Promise<any>;
        queryByUser: (userId: string, query?: any) => Promise<any>;
    };
    notificationPreferences: {
        listPreferencesCommunicationChannelId: (userId: string, communicationChannelId: string) => Promise<any>;
        listPreferencesType: (userId: string, type: string, address: string) => Promise<any>;
        listOfPreferenceCategories: (userId: string, communicationChannelId: string) => Promise<any>;
        getPreferenceCommunicationChannelId: (userId: string, communicationChannelId: string, notification: string) => Promise<any>;
        getPreferenceType: (userId: string, type: string, address: string, notification: string) => Promise<any>;
        updatePreferenceCommunicationChannelId: (communicationChannelId: string, notification: string, body: any) => Promise<any>;
        updatePreferenceType: (type: string, address: string, notification: string, body: any) => Promise<any>;
        updatePreferencesByCategory: (communicationChannelId: string, category: string, body: any) => Promise<any>;
        updateMultiplePreferencesCommunicationChannelId: (communicationChannelId: string, body: any) => Promise<any>;
        updateMultiplePreferencesType: (type: string, address: string, body: any) => Promise<any>;
    };
    contentExports: {
        listContentExportsCourses: (courseId: string) => Promise<any>;
        listContentExportsGroups: (groupId: string) => Promise<any>;
        listContentExportsUsers: (userId: string) => Promise<any>;
        showContentExportCourses: (courseId: string, contentExportId: string) => Promise<any>;
        showContentExportGroups: (groupId: string, contentExportId: string) => Promise<any>;
        showContentExportUsers: (userId: string, contentExportId: string) => Promise<any>;
        exportContentCourses: (courseId: string, body: any) => Promise<any>;
        exportContentGroups: (groupId: string, body: any) => Promise<any>;
        exportContentUsers: (userId: string, body: any) => Promise<any>;
    };
    sections: {
        listCourseSections: (courseId: string, query?: any) => Promise<any>;
        createCourseSection: (courseId: string, body: any) => Promise<any>;
        crossListSection: (sectionId: string, newCourseId: string) => Promise<any>;
        deCrossListSection: (sectionId: string) => Promise<any>;
        editSection: (sectionId: string, body: any) => Promise<any>;
        getSectionInformationCourses: (courseId: string, sectionId: string, query?: any) => Promise<any>;
        getSectionInformationSections: (sectionId: string, query?: any) => Promise<any>;
        deleteSection: (sectionId: string) => Promise<any>;
    };
    sisImports: {
        getSisImportList: (accountId: string, query?: any) => Promise<any>;
        importSisData: (accountId: string, body: any) => Promise<any>;
        getSisImportStatus: (accountId: string, sisImportId: string) => Promise<any>;
        restoreWorkflowStatesOfSisImportedItems: (accountId: string, sisImportId: string, body: any) => Promise<any>;
        abortSisImport: (accountId: string, sisImportId: string) => Promise<any>;
        abortAllPendingSisImports: (accountId: string) => Promise<any>;
    };
    authenticationProviders: {
        listAuthenticationProviders: (accountId: string) => Promise<any>;
        addAuthenticationProvider: (accountId: string) => Promise<any>;
        updateAuthenticationProvider: (accountId: string, authenticationProviderId: string) => Promise<any>;
        getAuthenticationProvider: (accountId: string, authenticationProviderId: string) => Promise<any>;
        deleteAuthenticationProvider: (accountId: string, authenticationProviderId: string) => Promise<any>;
        showAccountAuthSettings: (accountId: string) => Promise<any>;
        updateAccountAuthSettings: (accountId: string) => Promise<any>;
    };
    blueprintCourses: {
        getBlueprintInformation: (courseId: string, templateId: string) => Promise<any>;
        getAssociatedCourseInformation: (courseId: string, templateId: string) => Promise<any>;
        updateAssociatedCourses: (courseId: string, templateId: string, body: any) => Promise<any>;
        beginMigrationToPushToAssociatedCourses: (courseId: string, templateId: string, body: any) => Promise<any>;
        setOrRemoveRestrictionsOnBlueprintCourseObject: (courseId: string, templateId: string, body: any) => Promise<any>;
        getUnsyncedChanges: (courseId: string, templateId: string) => Promise<any>;
        listBlueprintMigrations: (courseId: string, templateId: string) => Promise<any>;
        showBlueprintMigration: (courseId: string, templateId: string, migrationId: string) => Promise<any>;
        getMigrationDetails: (courseId: string, templateId: string, migrationId: string) => Promise<any>;
        listBlueprintImports: (courseId: string, subscriptionId: string) => Promise<any>;
        showBlueprintImport: (courseId: string, subscriptionId: string, migrationId: string) => Promise<any>;
        getImportDetails: (courseId: string, subscriptionId: string, migrationId: string) => Promise<any>;
    };
    conversations: {
        listConversations: (query?: any) => Promise<any>;
        createConversation: (body: any) => Promise<any>;
        getRunningBatches: () => Promise<any>;
        getSingleConversation: (conversationId: string, query?: any) => Promise<any>;
        editConversation: (conversationId: string, body: any) => Promise<any>;
        markAllAsRead: () => Promise<any>;
        deleteConversation: (conversationId: string) => Promise<any>;
        addRecipients: (conversationId: string, body: any) => Promise<any>;
        addMessage: (conversationId: string, body: any) => Promise<any>;
        deleteMessage: (conversationId: string, body: any) => Promise<any>;
        batchUpdateConversations: (body: any) => Promise<any>;
        findRecipients: () => Promise<any>;
        unreadCount: () => Promise<any>;
    };
    latePolicy: {
        getLatePolicy: (courseId: string) => Promise<any>;
        createLatePolicy: (courseId: string, body: any) => Promise<any>;
        patchLatePolicy: (courseId: string, body: any) => Promise<any>;
    };
    groups: {
        listYourGroups: (query?: any) => Promise<any>;
        listGroupsAvailableInContextAccounts: (accountId: string, query?: any) => Promise<any>;
        listGroupsAvailableInContextCourses: (courseId: string, query?: any) => Promise<any>;
        getSingleGroup: (groupId: string, query?: any) => Promise<any>;
        createGroupGroups: (body: any) => Promise<any>;
        createGroupGroupCategories: (groupCategoryId: string, body: any) => Promise<any>;
        editGroup: (groupId: string, body: any) => Promise<any>;
        deleteGroup: (groupId: string) => Promise<any>;
        inviteOthersToGroup: (groupId: string, body: any) => Promise<any>;
        listGroupSUsers: (groupId: string, query?: any) => Promise<any>;
        uploadFile: (groupId: string) => Promise<any>;
        previewProcessedHtml: (groupId: string, body: any) => Promise<any>;
        groupActivityStream: (groupId: string) => Promise<any>;
        groupActivityStreamSummary: (groupId: string) => Promise<any>;
        listGroupMemberships: (groupId: string, query?: any) => Promise<any>;
        getSingleGroupMembershipMemberships: (groupId: string, membershipId: string) => Promise<any>;
        getSingleGroupMembershipUsers: (groupId: string, userId: string) => Promise<any>;
        createMembership: (groupId: string, body: any) => Promise<any>;
        updateMembershipMemberships: (groupId: string, membershipId: string, body: any) => Promise<any>;
        updateMembershipUsers: (groupId: string, userId: string, body: any) => Promise<any>;
        leaveGroupMemberships: (groupId: string, membershipId: string) => Promise<any>;
        leaveGroupUsers: (groupId: string, userId: string) => Promise<any>;
    };
    appointmentGroups: {
        listAppointmentGroups: (query?: any) => Promise<any>;
        createAppointmentGroup: (body: any) => Promise<any>;
        getSingleAppointmentGroup: (appointmentGroupId: string, query?: any) => Promise<any>;
        updateAppointmentGroup: (appointmentGroupId: string, body: any) => Promise<any>;
        deleteAppointmentGroup: (appointmentGroupId: string, query?: any) => Promise<any>;
        listUserParticipants: (appointmentGroupId: string, query?: any) => Promise<any>;
        listStudentGroupParticipants: (appointmentGroupId: string, query?: any) => Promise<any>;
        getNextAppointment: (query?: any) => Promise<any>;
    };
    polls: {
        listPolls: () => Promise<any>;
        getSinglePoll: (pollId: string) => Promise<any>;
        createSinglePoll: (body: any) => Promise<any>;
        updateSinglePoll: (pollId: string, body: any) => Promise<any>;
        deletePoll: (pollId: string) => Promise<any>;
    };
    calendarEvents: {
        listCalendarEvents: (query?: any) => Promise<any>;
        listCalendarEventsForUser: (userId: string, query?: any) => Promise<any>;
        createCalendarEvent: (body: any) => Promise<any>;
        getSingleCalendarEventOrAssignment: (calendarEventId: string) => Promise<any>;
        reserveTimeSlot: (calendarEventId: string, body: any) => Promise<any>;
        reserveTimeSlotParticipantId: (calendarEventId: string, participantId: string, body: any) => Promise<any>;
        updateCalendarEvent: (calendarEventId: string, body: any) => Promise<any>;
        deleteCalendarEvent: (calendarEventId: string, query?: any) => Promise<any>;
        setCourseTimetable: (courseId: string, body: any) => Promise<any>;
        getCourseTimetable: (courseId: string) => Promise<any>;
        createOrUpdateEventsDirectlyForCourseTimetable: (courseId: string, body: any) => Promise<any>;
    };
    modules: {
        listModules: (courseId: string, query?: any) => Promise<any>;
        showModule: (courseId: string, moduleId: string, query?: any) => Promise<any>;
        createModule: (courseId: string, body: any) => Promise<any>;
        updateModule: (courseId: string, moduleId: string, body: any) => Promise<any>;
        deleteModule: (courseId: string, moduleId: string) => Promise<any>;
        reLockModuleProgressions: (courseId: string, moduleId: string) => Promise<any>;
        listModuleItems: (courseId: string, moduleId: string, query?: any) => Promise<any>;
        showModuleItem: (courseId: string, moduleId: string, itemId: string, query?: any) => Promise<any>;
        createModuleItem: (courseId: string, moduleId: string, body: any) => Promise<any>;
        updateModuleItem: (courseId: string, moduleId: string, itemId: string, body: any) => Promise<any>;
        selectMasteryPath: (courseId: string, moduleId: string, itemId: string, body: any) => Promise<any>;
        deleteModuleItem: (courseId: string, moduleId: string, itemId: string) => Promise<any>;
        markModuleItemAsDoneNotDone: (courseId: string, moduleId: string, itemId: string) => Promise<any>;
        getModuleItemSequence: (courseId: string, query?: any) => Promise<any>;
        markModuleItemRead: (courseId: string, moduleId: string, itemId: string) => Promise<any>;
    };
    pages: {
        showFrontPageCourses: (courseId: string) => Promise<any>;
        showFrontPageGroups: (groupId: string) => Promise<any>;
        duplicatePage: (courseId: string, url: string) => Promise<any>;
        updateCreateFrontPageCourses: (courseId: string, body: any) => Promise<any>;
        updateCreateFrontPageGroups: (groupId: string, body: any) => Promise<any>;
        listPagesCourses: (courseId: string, query?: any) => Promise<any>;
        listPagesGroups: (groupId: string, query?: any) => Promise<any>;
        createPageCourses: (courseId: string, body: any) => Promise<any>;
        createPageGroups: (groupId: string, body: any) => Promise<any>;
        showPageCourses: (courseId: string, url: string) => Promise<any>;
        showPageGroups: (groupId: string, url: string) => Promise<any>;
        updateCreatePageCourses: (courseId: string, url: string, body: any) => Promise<any>;
        updateCreatePageGroups: (groupId: string, url: string, body: any) => Promise<any>;
        deletePageCourses: (courseId: string, url: string) => Promise<any>;
        deletePageGroups: (groupId: string, url: string) => Promise<any>;
        listRevisionsCourses: (courseId: string, url: string) => Promise<any>;
        listRevisionsGroups: (groupId: string, url: string) => Promise<any>;
        showRevisionCoursesLatest: (courseId: string, url: string, query?: any) => Promise<any>;
        showRevisionGroupsLatest: (groupId: string, url: string, query?: any) => Promise<any>;
        showRevisionCoursesRevisionId: (courseId: string, url: string, revisionId: string, query?: any) => Promise<any>;
        showRevisionGroupsRevisionId: (groupId: string, url: string, revisionId: string, query?: any) => Promise<any>;
        revertToRevisionCourses: (courseId: string, url: string, revisionId: any) => Promise<any>;
        revertToRevisionGroups: (groupId: string, url: string, revisionId: any) => Promise<any>;
    };
    quizSubmissionUserList: {
        sendMessageToUnsubmittedOrSubmittedUsersForQuiz: (courseId: string, quizzeId: string, body: any) => Promise<any>;
    };
    progress: {
        queryProgress: (progresId: string) => Promise<any>;
    };
    enrollments: {
        listEnrollmentsCourses: (courseId: string, query?: any) => Promise<any>;
        listEnrollmentsSections: (sectionId: string, query?: any) => Promise<any>;
        listEnrollmentsUsers: (userId: string, query?: any) => Promise<any>;
        enrollmentById: (accountId: string, enrollmentId: any) => Promise<any>;
        enrollUserCourses: (courseId: string, body: any) => Promise<any>;
        enrollUserSections: (sectionId: string, body: any) => Promise<any>;
        concludeDeactivateOrDeleteEnrollment: (courseId: string, enrollmentId: string, query?: any) => Promise<any>;
        acceptCourseInvitation: (courseId: string, enrollmentId: string) => Promise<any>;
        rejectCourseInvitation: (courseId: string, enrollmentId: string) => Promise<any>;
        reActivateEnrollment: (courseId: string, enrollmentId: string) => Promise<any>;
        addsLastAttendedDateToStudentEnrollmentInCourse: (courseId: string, userId: string) => Promise<any>;
    };
    peerReviews: {
        getAllPeerReviewsCoursesPeerReviews: (courseId: string, assignmentId: string, query?: any) => Promise<any>;
        getAllPeerReviewsSectionsPeerReviews: (sectionId: string, assignmentId: string, query?: any) => Promise<any>;
        getAllPeerReviewsCoursesSubmissions: (courseId: string, assignmentId: string, submissionId: string, query?: any) => Promise<any>;
        getAllPeerReviewsSectionsSubmissions: (sectionId: string, assignmentId: string, submissionId: string, query?: any) => Promise<any>;
        createPeerReviewCourses: (courseId: string, assignmentId: string, submissionId: string, body: any) => Promise<any>;
        createPeerReviewSections: (sectionId: string, assignmentId: string, submissionId: string, body: any) => Promise<any>;
        deletePeerReviewCourses: (courseId: string, assignmentId: string, submissionId: string, query: any) => Promise<any>;
        deletePeerReviewSections: (sectionId: string, assignmentId: string, submissionId: string, query: any) => Promise<any>;
    };
    contentMigrations: {
        listMigrationIssuesAccounts: (accountId: string, contentMigrationId: string) => Promise<any>;
        listMigrationIssuesCourses: (courseId: string, contentMigrationId: string) => Promise<any>;
        listMigrationIssuesGroups: (groupId: string, contentMigrationId: string) => Promise<any>;
        listMigrationIssuesUsers: (userId: string, contentMigrationId: string) => Promise<any>;
        getMigrationIssueAccounts: (accountId: string, contentMigrationId: string, migrationIssueId: string) => Promise<any>;
        getMigrationIssueCourses: (courseId: string, contentMigrationId: string, migrationIssueId: string) => Promise<any>;
        getMigrationIssueGroups: (groupId: string, contentMigrationId: string, migrationIssueId: string) => Promise<any>;
        getMigrationIssueUsers: (userId: string, contentMigrationId: string, migrationIssueId: string) => Promise<any>;
        updateMigrationIssueAccounts: (accountId: string, contentMigrationId: string, migrationIssueId: string, body: any) => Promise<any>;
        updateMigrationIssueCourses: (courseId: string, contentMigrationId: string, migrationIssueId: string, body: any) => Promise<any>;
        updateMigrationIssueGroups: (groupId: string, contentMigrationId: string, migrationIssueId: string, body: any) => Promise<any>;
        updateMigrationIssueUsers: (userId: string, contentMigrationId: string, migrationIssueId: string, body: any) => Promise<any>;
        listContentMigrationsAccounts: (accountId: string) => Promise<any>;
        listContentMigrationsCourses: (courseId: string) => Promise<any>;
        listContentMigrationsGroups: (groupId: string) => Promise<any>;
        listContentMigrationsUsers: (userId: string) => Promise<any>;
        getContentMigrationAccounts: (accountId: string, contentMigrationId: string) => Promise<any>;
        getContentMigrationCourses: (courseId: string, contentMigrationId: string) => Promise<any>;
        getContentMigrationGroups: (groupId: string, contentMigrationId: string) => Promise<any>;
        getContentMigrationUsers: (userId: string, contentMigrationId: string) => Promise<any>;
        createContentMigrationAccounts: (accountId: string, body: any) => Promise<any>;
        createContentMigrationCourses: (courseId: string, body: any) => Promise<any>;
        createContentMigrationGroups: (groupId: string, body: any) => Promise<any>;
        createContentMigrationUsers: (userId: string, body: any) => Promise<any>;
        updateContentMigrationAccounts: (accountId: string, contentMigrationId: string) => Promise<any>;
        updateContentMigrationCourses: (courseId: string, contentMigrationId: string) => Promise<any>;
        updateContentMigrationGroups: (groupId: string, contentMigrationId: string) => Promise<any>;
        updateContentMigrationUsers: (userId: string, contentMigrationId: string) => Promise<any>;
        listMigrationSystemsAccounts: (accountId: string) => Promise<any>;
        listMigrationSystemsCourses: (courseId: string) => Promise<any>;
        listMigrationSystemsGroups: (groupId: string) => Promise<any>;
        listMigrationSystemsUsers: (userId: string) => Promise<any>;
    };
    pollSubmissions: {
        getSinglePollSubmission: (pollId: string, pollSessionId: string, pollSubmissionId: string) => Promise<any>;
        createSinglePollSubmission: (pollId: string, pollSessionId: string, body: any) => Promise<any>;
    };
    assignmentGroups: {
        listAssignmentGroups: (courseId: string, query?: any) => Promise<any>;
        getAssignmentGroup: (courseId: string, assignmentGroupId: string, query?: any) => Promise<any>;
        createAssignmentGroup: (courseId: string, body: any) => Promise<any>;
        editAssignmentGroup: (courseId: string, assignmentGroupId: string) => Promise<any>;
        destroyAssignmentGroup: (courseId: string, assignmentGroupId: string, query?: any) => Promise<any>;
    };
    webhooksSubscriptions: {
        createWebhookSubscription: (body: any) => Promise<any>;
        deleteWebhookSubscription: (subscriptionId: string) => Promise<any>;
        showSingleWebhookSubscription: (subscriptionId: string) => Promise<any>;
        updateWebhookSubscription: (subscriptionId: string) => Promise<any>;
        listAllWebhookSubscriptionForToolProxy: () => Promise<any>;
    };
    pollChoices: {
        listPollChoicesInPoll: (pollId: string) => Promise<any>;
        getSinglePollChoice: (pollId: string, pollChoiceId: string) => Promise<any>;
        createSinglePollChoice: (pollId: string, body: any) => Promise<any>;
        updateSinglePollChoice: (pollId: string, pollChoiceId: string, body: any) => Promise<any>;
        deletePollChoice: (pollId: string, pollChoiceId: string) => Promise<any>;
    };
    submissions: {
        submitAssignmentCourses: (courseId: string, assignmentId: string, body: any) => Promise<any>;
        submitAssignmentSections: (sectionId: string, assignmentId: string, body: any) => Promise<any>;
        listAssignmentSubmissionsCourses: (courseId: string, assignmentId: string, query?: any) => Promise<any>;
        listAssignmentSubmissionsSections: (sectionId: string, assignmentId: string, query?: any) => Promise<any>;
        listSubmissionsForMultipleAssignmentsCourses: (courseId: string, query?: any) => Promise<any>;
        listSubmissionsForMultipleAssignmentsSections: (sectionId: string, query?: any) => Promise<any>;
        getSingleSubmissionCourses: (courseId: string, assignmentId: string, userId: string, query?: any) => Promise<any>;
        getSingleSubmissionSections: (sectionId: string, assignmentId: string, userId: string, query?: any) => Promise<any>;
        uploadFileCourses: (courseId: string, assignmentId: string, userId: string) => Promise<any>;
        uploadFileSections: (sectionId: string, assignmentId: string, userId: string) => Promise<any>;
        gradeOrCommentOnSubmissionCourses: (courseId: string, assignmentId: string, userId: string, body: any) => Promise<any>;
        gradeOrCommentOnSubmissionSections: (sectionId: string, assignmentId: string, userId: string, body: any) => Promise<any>;
        listGradeableStudents: (courseId: string, assignmentId: string) => Promise<any>;
        listMultipleAssignmentsGradeableStudents: (courseId: string, query?: any) => Promise<any>;
        gradeOrCommentOnMultipleSubmissionsCoursesSubmissions: (courseId: string, body: any) => Promise<any>;
        gradeOrCommentOnMultipleSubmissionsCoursesAssignments: (courseId: string, assignmentId: string, body: any) => Promise<any>;
        gradeOrCommentOnMultipleSubmissionsSectionsSubmissions: (sectionId: string, body: any) => Promise<any>;
        gradeOrCommentOnMultipleSubmissionsSectionsAssignments: (sectionId: string, assignmentId: string, body: any) => Promise<any>;
        markSubmissionAsReadCourses: (courseId: string, assignmentId: string, userId: string) => Promise<any>;
        markSubmissionAsReadSections: (sectionId: string, assignmentId: string, userId: string) => Promise<any>;
        markSubmissionAsUnreadCourses: (courseId: string, assignmentId: string, userId: string) => Promise<any>;
        markSubmissionAsUnreadSections: (sectionId: string, assignmentId: string, userId: string) => Promise<any>;
        submissionSummaryCourses: (courseId: string, assignmentId: string, query?: any) => Promise<any>;
        submissionSummarySections: (sectionId: string, assignmentId: string, query?: any) => Promise<any>;
    };
    outcomeGroups: {
        redirectToRootOutcomeGroupForContextGlobal: () => Promise<any>;
        redirectToRootOutcomeGroupForContextAccounts: (accountId: string) => Promise<any>;
        redirectToRootOutcomeGroupForContextCourses: (courseId: string) => Promise<any>;
        getAllOutcomeGroupsForContextAccounts: (accountId: string) => Promise<any>;
        getAllOutcomeGroupsForContextCourses: (courseId: string) => Promise<any>;
        getAllOutcomeLinksForContextAccounts: (accountId: string, query?: any) => Promise<any>;
        getAllOutcomeLinksForContextCourses: (courseId: string, query?: any) => Promise<any>;
        showOutcomeGroupGlobal: (outcomeGroupId: string) => Promise<any>;
        showOutcomeGroupAccounts: (accountId: string, outcomeGroupId: string) => Promise<any>;
        showOutcomeGroupCourses: (courseId: string, outcomeGroupId: string) => Promise<any>;
        updateOutcomeGroupGlobal: (outcomeGroupId: string, body: any) => Promise<any>;
        updateOutcomeGroupAccounts: (accountId: string, outcomeGroupId: string, body: any) => Promise<any>;
        updateOutcomeGroupCourses: (courseId: string, outcomeGroupId: string, body: any) => Promise<any>;
        deleteOutcomeGroupGlobal: (outcomeGroupId: string) => Promise<any>;
        deleteOutcomeGroupAccounts: (accountId: string, outcomeGroupId: string) => Promise<any>;
        deleteOutcomeGroupCourses: (courseId: string, outcomeGroupId: string) => Promise<any>;
        listLinkedOutcomesGlobal: (outcomeGroupId: string, query?: any) => Promise<any>;
        listLinkedOutcomesAccounts: (accountId: string, outcomeGroupId: string, query?: any) => Promise<any>;
        listLinkedOutcomesCourses: (courseId: string, outcomeGroupId: string, query?: any) => Promise<any>;
        createLinkOutcomeGlobal: (outcomeGroupId: string, body: any) => Promise<any>;
        createLinkOutcomeGlobalOutcomeId: (outcomeGroupId: string, outcomeId: any, body: any) => Promise<any>;
        createLinkOutcomeAccounts: (accountId: string, outcomeGroupId: string, body: any) => Promise<any>;
        createLinkOutcomeAccountsOutcomeId: (accountId: string, outcomeGroupId: string, outcomeId: any, body: any) => Promise<any>;
        createLinkOutcomeCourses: (courseId: string, outcomeGroupId: string, body: any) => Promise<any>;
        createLinkOutcomeCoursesOutcomeId: (courseId: string, outcomeGroupId: string, outcomeId: any, body: any) => Promise<any>;
        unlinkOutcomeGlobal: (outcomeGroupId: string, outcomeId: string) => Promise<any>;
        unlinkOutcomeAccounts: (accountId: string, outcomeGroupId: string, outcomeId: string) => Promise<any>;
        unlinkOutcomeCourses: (courseId: string, outcomeGroupId: string, outcomeId: string) => Promise<any>;
        listSubgroupsGlobal: (outcomeGroupId: string) => Promise<any>;
        listSubgroupsAccounts: (accountId: string, outcomeGroupId: string) => Promise<any>;
        listSubgroupsCourses: (courseId: string, outcomeGroupId: string) => Promise<any>;
        createSubgroupGlobal: (outcomeGroupId: string, body: any) => Promise<any>;
        createSubgroupAccounts: (accountId: string, outcomeGroupId: string, body: any) => Promise<any>;
        createSubgroupCourses: (courseId: string, outcomeGroupId: string, body: any) => Promise<any>;
        importOutcomeGroupGlobal: (outcomeGroupId: string, body: any) => Promise<any>;
        importOutcomeGroupAccounts: (accountId: string, outcomeGroupId: string, body: any) => Promise<any>;
        importOutcomeGroupCourses: (courseId: string, outcomeGroupId: string, body: any) => Promise<any>;
    };
    rubrics: {
        listRubricsAccounts: (accountId: string) => Promise<any>;
        listRubricsCourses: (courseId: string) => Promise<any>;
        getSingleRubricAccounts: (accountId: string, rubricId: string, query?: any) => Promise<any>;
        getSingleRubricCourses: (courseId: string, rubricId: string, query?: any) => Promise<any>;
    };
    conferences: {
        listConferencesCourses: (courseId: string) => Promise<any>;
        listConferencesGroups: (groupId: string) => Promise<any>;
    };
    quizStatistics: {
        fetchingLatestQuizStatistics: (courseId: string, quizId: string, query?: any) => Promise<any>;
    };
    sisIntegration: {
        retrieveAssignmentsEnabledForGradeExportToSisAccounts: (accountId: any, query?: any) => Promise<any>;
        retrieveAssignmentsEnabledForGradeExportToSisCourses: (courseId: any, query?: any) => Promise<any>;
        disableAssignmentsCurrentlyEnabledForGradeExportToSis: (courseId: any, body: any) => Promise<any>;
    };
    quizReports: {
        retrieveAllQuizReports: (courseId: string, quizId: string, query?: any) => Promise<any>;
        createQuizReport: (courseId: string, quizId: string, body: any) => Promise<any>;
        getQuizReport: (courseId: string, quizId: string, reportId: string, query?: any) => Promise<any>;
        abortGenerationOfReportOrRemovePreviouslyGeneratedOne: (courseId: string, quizId: string, reportId: string) => Promise<any>;
    };
    assignments: {
        deleteAssignment: (courseId: string, assignmentId: string) => Promise<any>;
        listAssignments: (courseId: string, query?: any) => Promise<any>;
        listAssignmentsForUser: (userId: string, courseId: string) => Promise<any>;
        getSingleAssignment: (courseId: string, assignmentId: string, query?: any) => Promise<any>;
        createAssignment: (courseId: string, body: any) => Promise<any>;
        editAssignment: (courseId: string, assignmentId: string, body: any) => Promise<any>;
        listAssignmentOverrides: (courseId: string, assignmentId: string) => Promise<any>;
        getSingleAssignmentOverride: (courseId: string, assignmentId: string, overrideId: string) => Promise<any>;
        redirectToAssignmentOverrideForGroup: (groupId: string, assignmentId: string) => Promise<any>;
        redirectToAssignmentOverrideForSection: (courseSectionId: string, assignmentId: string) => Promise<any>;
        createAssignmentOverride: (courseId: string, assignmentId: string, body: any) => Promise<any>;
        updateAssignmentOverride: (courseId: string, assignmentId: string, overrideId: string, body: any) => Promise<any>;
        deleteAssignmentOverride: (courseId: string, assignmentId: string, overrideId: string) => Promise<any>;
        batchRetrieveOverridesInCourse: (courseId: string, query: any) => Promise<any>;
        batchCreateOverridesInCourse: (courseId: string, body: any) => Promise<any>;
        batchUpdateOverridesInCourse: (courseId: string, body: any) => Promise<any>;
    };
    users: {
        listUsersInAccount: (accountId: string, query?: any) => Promise<any>;
        listActivityStreamSelf: () => Promise<any>;
        listActivityStreamActivityStream: () => Promise<any>;
        activityStreamSummary: () => Promise<any>;
        listTodoItems: (query?: any) => Promise<any>;
        listCountsForTodoItems: (query?: any) => Promise<any>;
        listUpcomingAssignmentsCalendarEvents: () => Promise<any>;
        listMissingSubmissions: (userId: string, query?: any) => Promise<any>;
        hideStreamItem: (activityStreaId: string) => Promise<any>;
        hideAllStreamItems: () => Promise<any>;
        uploadFile: (userId: string) => Promise<any>;
        showUserDetails: (userId: string) => Promise<any>;
        createUser: (accountId: string, body: any) => Promise<any>;
        selfRegisterUser: (accountId: string, body: any) => Promise<any>;
        updateUserSettings: (userId: string, query?: any) => Promise<any>;
        getCustomColors: (userId: string) => Promise<any>;
        getCustomColor: (userId: string, assetString: string) => Promise<any>;
        updateCustomColor: (userId: string, assetString: string, body: any) => Promise<any>;
        getDashboardPositions: (userId: string) => Promise<any>;
        updateDashboardPositions: (userId: string) => Promise<any>;
        editUser: (userId: string, body: any) => Promise<any>;
        mergeUserIntoAnotherUserDestinationUserId: (userId: string, destinationUserId: string) => Promise<any>;
        mergeUserIntoAnotherUserAccounts: (userId: string, destinationAccountId: string, destinationUserId: string) => Promise<any>;
        splitMergedUsersIntoSeparateUsers: (userId: string) => Promise<any>;
        getPandataEventsJwtTokenAndItsExpirationDate: (body: any) => Promise<any>;
        getUserProfile: (userId: string) => Promise<any>;
        listAvatarOptions: (userId: string) => Promise<any>;
        listUserPageViews: (userId: string, query?: any) => Promise<any>;
        storeCustomData: (userId: string, body: any, scope?: string) => Promise<any>;
        loadCustomData: (userId: string, query: any, scope?: string) => Promise<any>;
        deleteCustomData: (userId: string, query: any, scope?: string) => Promise<any>;
        listCourseNicknames: () => Promise<any>;
        getCourseNickname: (courseId: string) => Promise<any>;
        setCourseNickname: (courseId: string, body: any) => Promise<any>;
        removeCourseNickname: (courseId: string) => Promise<any>;
        clearCourseNicknames: () => Promise<any>;
    };
    outcomeImports: {
        importOutcomesAccounts: (accountId: string, body: any) => Promise<any>;
        importOutcomesCourses: (courseId: string, body: any) => Promise<any>;
        getOutcomeImportStatusAccounts: (accountId: string, outcomeImportId: string) => Promise<any>;
        getOutcomeImportStatusCourses: (courseId: string, outcomeImportId: string) => Promise<any>;
    };
    courses: {
        listYourCourses: (query?: any) => Promise<any>;
        listCoursesForUser: (userId: string, query?: any) => Promise<any>;
        createNewCourse: (accountId: string, body: any) => Promise<any>;
        uploadFile: (courseId: string) => Promise<any>;
        listStudents: (courseId: string) => Promise<any>;
        listUsersInCourseUsers: (courseId: string, query?: any) => Promise<any>;
        listUsersInCourseSearchUsers: (courseId: string, query?: any) => Promise<any>;
        listRecentlyLoggedInStudents: (courseId: string) => Promise<any>;
        getSingleUser: (courseId: string, userId: string) => Promise<any>;
        previewProcessedHtml: (courseId: string, body: any) => Promise<any>;
        courseActivityStream: (courseId: string) => Promise<any>;
        courseActivityStreamSummary: (courseId: string) => Promise<any>;
        courseTodoItems: (courseId: string) => Promise<any>;
        deleteConcludeCourse: (courseId: string, query: any) => Promise<any>;
        getCourseSettings: (courseId: string) => Promise<any>;
        updateCourseSettings: (courseId: string, body: any) => Promise<any>;
        getSingleCourseCourses: (courseId: string, query?: any) => Promise<any>;
        getSingleCourseAccounts: (accountId: string, courseId: string, query?: any) => Promise<any>;
        updateCourse: (courseId: string, body: any) => Promise<any>;
        updateCourses: (accountId: string, body: any) => Promise<any>;
        resetCourse: (courseId: string) => Promise<any>;
        getEffectiveDueDates: (courseId: string, query?: any) => Promise<any>;
        permissions: (courseId: string, query?: any) => Promise<any>;
        getCourseCopyStatus: (courseId: string, courseCopId: string) => Promise<any>;
        copyCourseContent: (courseId: string, body: any) => Promise<any>;
    };
    quizQuestions: {
        listQuestionsInQuizOrSubmission: (courseId: string, quizId: string, query?: any) => Promise<any>;
        getSingleQuizQuestion: (courseId: string, quizId: string, questionId: any) => Promise<any>;
        createSingleQuizQuestion: (courseId: string, quizId: string, body: any) => Promise<any>;
        updateExistingQuizQuestion: (courseId: string, quizId: any, questionId: any, body: any) => Promise<any>;
        deleteQuizQuestion: (courseId: string, quizId: any, questionId: any) => Promise<any>;
    };
    discussionTopics: {
        listDiscussionTopicsCourses: (courseId: string, query?: any) => Promise<any>;
        listDiscussionTopicsGroups: (groupId: string, query?: any) => Promise<any>;
        createNewDiscussionTopicCourses: (courseId: string, body: any) => Promise<any>;
        createNewDiscussionTopicGroups: (groupId: string, body: any) => Promise<any>;
        updateTopicCourses: (courseId: string, topicId: string, body: any) => Promise<any>;
        updateTopicGroups: (groupId: string, topicId: string, body: any) => Promise<any>;
        deleteTopicCourses: (courseId: string, topicId: string) => Promise<any>;
        deleteTopicGroups: (groupId: string, topicId: string) => Promise<any>;
        reorderPinnedTopicsCourses: (courseId: string, body: any) => Promise<any>;
        reorderPinnedTopicsGroups: (groupId: string, body: any) => Promise<any>;
        updateEntryCourses: (courseId: string, topicId: string, entrieId: string, body: any) => Promise<any>;
        updateEntryGroups: (groupId: string, topicId: string, entrieId: string, body: any) => Promise<any>;
        deleteEntryCourses: (courseId: string, topicId: string, entrieId: string) => Promise<any>;
        deleteEntryGroups: (groupId: string, topicId: string, entrieId: string) => Promise<any>;
        getSingleTopicCourses: (courseId: string, topicId: string, query?: any) => Promise<any>;
        getSingleTopicGroups: (groupId: string, topicId: string, query?: any) => Promise<any>;
        getFullTopicCourses: (courseId: string, topicId: string) => Promise<any>;
        getFullTopicGroups: (groupId: string, topicId: string) => Promise<any>;
        postEntryCourses: (courseId: string, topicId: string, body: any) => Promise<any>;
        postEntryGroups: (groupId: string, topicId: string, body: any) => Promise<any>;
        listTopicEntriesCourses: (courseId: string, topicId: string) => Promise<any>;
        listTopicEntriesGroups: (groupId: string, topicId: string) => Promise<any>;
        postReplyCourses: (courseId: string, topicId: string, entryId: string, body: any) => Promise<any>;
        postReplyGroups: (groupId: string, topicId: string, entryId: string, body: any) => Promise<any>;
        listEntryRepliesCourses: (courseId: string, topicId: string, entryId: string) => Promise<any>;
        listEntryRepliesGroups: (groupId: string, topicId: string, entryId: string) => Promise<any>;
        listEntriesCourses: (courseId: string, topicId: string, query?: any) => Promise<any>;
        listEntriesGroups: (groupId: string, topicId: string, query?: any) => Promise<any>;
        markTopicAsReadCourses: (courseId: string, topicId: string) => Promise<any>;
        markTopicAsReadGroups: (groupId: string, topicId: string) => Promise<any>;
        markTopicAsUnreadCourses: (courseId: string, topicId: string) => Promise<any>;
        markTopicAsUnreadGroups: (groupId: string, topicId: string) => Promise<any>;
        markAllEntriesAsReadCourses: (courseId: string, topicId: string, body: any) => Promise<any>;
        markAllEntriesAsReadGroups: (groupId: string, topicId: string, body: any) => Promise<any>;
        markAllEntriesAsUnreadCourses: (courseId: string, topicId: string, query?: any) => Promise<any>;
        markAllEntriesAsUnreadGroups: (groupId: string, topicId: string, query?: any) => Promise<any>;
        markEntryAsReadCourses: (courseId: string, topicId: string, entryId: string, body: any) => Promise<any>;
        markEntryAsReadGroups: (groupId: string, topicId: string, entryId: string, body: any) => Promise<any>;
        markEntryAsUnreadCourses: (courseId: string, topicId: string, entryId: string, query?: any) => Promise<any>;
        markEntryAsUnreadGroups: (groupId: string, topicId: string, entryId: string, query?: any) => Promise<any>;
        rateEntryCourses: (courseId: string, topicId: string, entryId: string, body: any) => Promise<any>;
        rateEntryGroups: (groupId: string, topicId: string, entryId: string, body: any) => Promise<any>;
        subscribeToTopicCourses: (courseId: string, topicId: string) => Promise<any>;
        subscribeToTopicGroups: (groupId: string, topicId: string) => Promise<any>;
        unsubscribeFromTopicCourses: (courseId: string, topicId: string) => Promise<any>;
        unsubscribeFromTopicGroups: (groupId: string, topicId: string) => Promise<any>;
    };
    quizzes: {
        listQuizzesInCourse: (courseId: string, query?: any) => Promise<any>;
        getSingleQuiz: (courseId: string, quizzeId: string) => Promise<any>;
        createQuiz: (courseId: string, body: any) => Promise<any>;
        editQuiz: (courseId: string, quizzeId: string, body: any) => Promise<any>;
        deleteQuiz: (courseId: string, quizzeId: string) => Promise<any>;
        reorderQuizItems: (courseId: string, quizzeId: string, body: any) => Promise<any>;
        validateQuizAccessCode: (courseId: string, quizzeId: string, body: any) => Promise<any>;
    };
    roles: {
        listRoles: (accountId: string, query?: any) => Promise<any>;
        getSingleRole: (roleId: string, accountId: string, query: any) => Promise<any>;
        createNewRole: (accountId: string, body: any) => Promise<any>;
        deactivateRole: (accountId: string, roleId: string, query: any) => Promise<any>;
        activateRole: (accountId: string, roleId: string, body: any) => Promise<any>;
        updateRole: (accountId: string, roleId: string, body: any) => Promise<any>;
    };
    accounts: {
        listAccounts: (query?: any) => Promise<any>;
        listAccountsForCourseAdmins: () => Promise<any>;
        getSingleAccount: (accountId: string) => Promise<any>;
        permissions: (accountId: string, query?: any) => Promise<any>;
        getSubAccountsOfAccount: (accountId: string, query?: any) => Promise<any>;
        returnsTermsOfServiceForThatAccount: (accountId: string) => Promise<any>;
        listActiveCoursesInAccount: (accountId: string, query?: any) => Promise<any>;
        updateAccount: (accountId: string, body: any) => Promise<any>;
        deleteUserFromRootAccount: (accountId: string, userId: string) => Promise<any>;
        createNewSubAccount: (accountId: string, body: any) => Promise<any>;
        deleteSubAccount: (accountId: string, subAccountId: string) => Promise<any>;
    };
    files: {
        getQuotaInformationCourses: (courseId: string) => Promise<any>;
        getQuotaInformationGroups: (groupId: string) => Promise<any>;
        getQuotaInformationUsers: (userId: string) => Promise<any>;
        listFilesCourses: (courseId: string, query?: any) => Promise<any>;
        listFilesUsers: (userId: string, query?: any) => Promise<any>;
        listFilesGroups: (groupId: string, query?: any) => Promise<any>;
        listFilesFolders: (folderId: string, query?: any) => Promise<any>;
        getPublicInlinePreviewUrl: (fileId: string, query?: any) => Promise<any>;
        getFileFiles: (fileId: string, query?: any) => Promise<any>;
        getFileCourses: (courseId: string, fileId: string, query?: any) => Promise<any>;
        getFileGroups: (groupId: string, fileId: string, query?: any) => Promise<any>;
        getFileUsers: (userId: string, fileId: string, query?: any) => Promise<any>;
        updateFile: (fileId: string, body: any) => Promise<any>;
        deleteFile: (fileId: string, query?: any) => Promise<any>;
        listFolders: (folderId: string) => Promise<any>;
        listAllFoldersCourses: (courseId: string) => Promise<any>;
        listAllFoldersUsers: (userId: string) => Promise<any>;
        listAllFoldersGroups: (groupId: string) => Promise<any>;
        resolvePathCoursesFullPath: (courseId: string, fullPath: undefined) => Promise<any>;
        resolvePathCourses: (courseId: string) => Promise<any>;
        resolvePathUsersFullPath: (userId: string, fullPath: undefined) => Promise<any>;
        resolvePathUsers: (userId: string) => Promise<any>;
        resolvePathGroupsFullPath: (groupId: string, fullPath: undefined) => Promise<any>;
        resolvePathGroups: (groupId: string) => Promise<any>;
        getFolderCourses: (courseId: string, folderId: string) => Promise<any>;
        getFolderUsers: (userId: string, folderId: string) => Promise<any>;
        getFolderGroups: (groupId: string, folderId: string) => Promise<any>;
        getFolderFolders: (folderId: string) => Promise<any>;
        updateFolder: (folderId: string, body: any) => Promise<any>;
        createFolderCourses: (courseId: string, body: any) => Promise<any>;
        createFolderUsers: (userId: string, body: any) => Promise<any>;
        createFolderGroups: (groupId: string, body: any) => Promise<any>;
        createFolderFolders: (folderId: string, body: any) => Promise<any>;
        deleteFolder: (folderId: string, query?: any) => Promise<any>;
        uploadFile: (folderId: string) => Promise<any>;
        copyFile: (destFolderId: string, body: any) => Promise<any>;
        copyFolder: (destFolderId: string, body: any) => Promise<any>;
        setUsageRightsCourses: (courseId: string, body: any) => Promise<any>;
        setUsageRightsGroups: (groupId: string, body: any) => Promise<any>;
        setUsageRightsUsers: (userId: string, body: any) => Promise<any>;
        removeUsageRightsCourses: (courseId: string, query: any) => Promise<any>;
        removeUsageRightsGroups: (groupId: string, query: any) => Promise<any>;
        removeUsageRightsUsers: (userId: string, query: any) => Promise<any>;
        listLicensesCourses: (courseId: string) => Promise<any>;
        listLicensesGroups: (groupId: string) => Promise<any>;
        listLicensesUsers: (userId: string) => Promise<any>;
    };
    externalTools: {
        listExternalToolsCourses: (courseId: string, query?: any) => Promise<any>;
        listExternalToolsAccounts: (accountId: string, query?: any) => Promise<any>;
        listExternalToolsGroups: (groupId: string, query?: any) => Promise<any>;
        getSessionlessLaunchUrlForExternalToolCourses: (courseId: string, query?: any) => Promise<any>;
        getSessionlessLaunchUrlForExternalToolAccounts: (accountId: string, query?: any) => Promise<any>;
        getSingleExternalToolCourses: (courseId: string, externalToolId: string) => Promise<any>;
        getSingleExternalToolAccounts: (accountId: string, externalToolId: string) => Promise<any>;
        createExternalToolCourses: (courseId: string, body: any) => Promise<any>;
        createExternalToolAccounts: (accountId: string, body: any) => Promise<any>;
        editExternalToolCourses: (courseId: string, externalToolId: string) => Promise<any>;
        editExternalToolAccounts: (accountId: string, externalToolId: string) => Promise<any>;
        deleteExternalToolCourses: (courseId: string, externalToolId: string) => Promise<any>;
        deleteExternalToolAccounts: (accountId: string, externalToolId: string) => Promise<any>;
    };
    settings: {
        totalCost: number;
        sentRequests: number;
        domain: string;
        token: string;
        maxPage: number;
        forcePage: number;
        formatCourseSIS: (courseSIS: string) => string;
        formatUserSIS: (userSIS: any) => string;
        formatTermSIS: (termSIS: string) => string;
    };
};
export = _exports;
