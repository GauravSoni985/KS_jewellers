import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'g1io5t1r', 
  dataset: 'production',          
  useCdn: true,
});
