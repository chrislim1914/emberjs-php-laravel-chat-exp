import CustomAuthenticator from 'frontend/objects/custom-authenticator';
import CustomAuthorizer from 'frontend/objects/custom-authorizer';

export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  window.ENV = window.MyAppNameENV;
  container.register('authenticator:custom', CustomAuthenticator);
  container.register('authorizer:custom', CustomAuthorizer);
};

export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize: initialize
};
