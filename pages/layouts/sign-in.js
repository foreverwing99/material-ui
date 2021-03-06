import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import Head from 'docs/src/modules/components/Head';
import SignIn from 'docs/src/pages/layouts/sign-in/SignIn';

function Page() {
  return (
    <React.Fragment>
      <Head
        title="Sign-in layout - Material-UI"
        description="An example layout for creating a sign-in page."
      />
      <SignIn />
    </React.Fragment>
  );
}

export default withRoot(Page);
