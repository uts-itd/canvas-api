const canvas = require('./index')('uts.instructure.com', '9126~EUczqSh46MDwZoJk4HBlfcerfQ2XLU1lyWWDUTlYRcU4Vt5xENlxlFofmyAbYNfJ');


canvas.enrollmentTerms.listEnrollmentTerms(1).then(terms => {
  console.log(terms.enrollment_terms.length);
});