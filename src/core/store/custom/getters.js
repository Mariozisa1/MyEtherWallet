import { useCustomStore } from '.';
import { useGlobalStore } from '@/core/store/global';

const customTokens = function (state) {
  const { network } = useGlobalStore();
  return state.tokens[network.type.name] || [];
};

const hasCustom = function () {
  const { customTokens } = useCustomStore();
  return customTokens.length > 0;
};

const hiddenTokens = function (state) {
  const { network } = useGlobalStore();
  return state.hiddenTokens[network.type.name] || [];
};

const hasHidden = function () {
  const { hiddenTokens } = useCustomStore();
  return hiddenTokens.length > 0;
};

export default {
  customTokens,
  hasCustom,
  hiddenTokens,
  hasHidden
};
