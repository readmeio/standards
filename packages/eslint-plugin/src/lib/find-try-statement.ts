import type { Rule } from 'eslint';

/**
 * Walks up the AST from `node` looking for an enclosing `TryStatement` whose
 * try-block range covers the node. Returns `null` if the node is unwrapped or
 * sits inside a catch/finally block (those blocks can also throw).
 */
export function findTryStatementRange(node: Rule.Node): [number, number] | null {
  if (!node.parent) {
    return null;
  }

  if (node.parent.type === 'TryStatement') {
    // If the node is the catch or finally block itself, it's not protected.
    if (node.parent.handler === node || node.parent.finalizer === node) {
      return null;
    }

    return node.range ?? null;
  }

  return findTryStatementRange(node.parent as Rule.Node);
}
