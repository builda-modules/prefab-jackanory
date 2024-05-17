import React, { useEffect, useState } from 'react';

import AuthenticatedLayout from 'templates/authenticated-layout';
import { PageLoader } from 'partials/page-loader';

/**
 * Add a description of your page here.
 */
export const %PASCAL_CASE%: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <PageLoader />;
  }



  return (
    <AuthenticatedLayout title="%SENTENCE_CASE%">
      Welcome to your new %SENTENCE_CASE% page.
    </AuthenticatedLayout>
  );
};

export default %PASCAL_CASE%;
