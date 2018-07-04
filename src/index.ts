/**
 *
 * Composes and awaits single-argument functions from left to right.
 * The leftmost function can take multiple arguments as it provides the
 * signature for the resulting composite function.
 *
 * For previous art, see
 * https://lodash.com/docs/4.17.10#flow
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from left to right and awaiting the result of each.
 *
 * For example, asyncFlow(f, g, h) is identical to doing
 * (...args) => h(await g(await f(...args))).
 */

type AsyncFlowFunction = (...args: any[]) => any;
type AsyncFlowResult = (...args: any[]) => Promise<any>;

export default function asyncFlow(
  ...fns: AsyncFlowFunction[]
): AsyncFlowResult {
  return fns.reduce((a, b) => (...args) => Promise.resolve(a(...args)).then(b));
}
