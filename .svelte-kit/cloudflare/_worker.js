var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key3 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key3) && key3 !== except)
        __defProp(to, key3, { get: () => from[key3], enumerable: !(desc = __getOwnPropDesc(from, key3)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/clsx/dist/clsx.mjs
function r(e3) {
  var t2, f, n2 = "";
  if ("string" == typeof e3 || "number" == typeof e3) n2 += e3;
  else if ("object" == typeof e3) if (Array.isArray(e3)) {
    var o2 = e3.length;
    for (t2 = 0; t2 < o2; t2++) e3[t2] && (f = r(e3[t2])) && (n2 && (n2 += " "), n2 += f);
  } else for (f in e3) e3[f] && (n2 && (n2 += " "), n2 += f);
  return n2;
}
function clsx() {
  for (var e3, t2, f = 0, n2 = "", o2 = arguments.length; f < o2; f++) (e3 = arguments[f]) && (t2 = r(e3)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var init_clsx = __esm({
  "node_modules/clsx/dist/clsx.mjs"() {
  }
});

// .svelte-kit/output/server/chunks/index.js
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function deferred() {
  var resolve2;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve2 = res;
    reject = rej;
  });
  return { promise, resolve: resolve2, reject };
}
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function state_descriptors_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
function set_component_context(context2) {
  component_context = context2;
}
function push$1(props, runes = false, fn) {
  component_context = {
    p: component_context,
    c: null,
    e: null,
    s: props,
    x: null,
    l: null
  };
}
function pop$1(component10) {
  var context2 = (
    /** @type {ComponentContext} */
    component_context
  );
  var effects = context2.e;
  if (effects !== null) {
    context2.e = null;
    for (var fn of effects) {
      create_user_effect(fn);
    }
  }
  component_context = context2.p;
  return (
    /** @type {T} */
    {}
  );
}
function is_runes() {
  return true;
}
function handle_error(error2) {
  var effect = active_effect;
  if (effect === null) {
    active_reaction.f |= ERROR_VALUE;
    return error2;
  }
  if ((effect.f & EFFECT_RAN) === 0) {
    if ((effect.f & BOUNDARY_EFFECT) === 0) {
      if (!effect.parent && error2 instanceof Error) {
        apply_adjustments(error2);
      }
      throw error2;
    }
    effect.b.error(error2);
  } else {
    invoke_error_boundary(error2, effect);
  }
}
function invoke_error_boundary(error2, effect) {
  while (effect !== null) {
    if ((effect.f & BOUNDARY_EFFECT) !== 0) {
      try {
        effect.b.error(error2);
        return;
      } catch (e3) {
        error2 = e3;
      }
    }
    effect = effect.parent;
  }
  if (error2 instanceof Error) {
    apply_adjustments(error2);
  }
  throw error2;
}
function apply_adjustments(error2) {
  const adjusted = adjustments.get(error2);
  if (adjusted) {
    define_property(error2, "message", {
      value: adjusted.message
    });
    define_property(error2, "stack", {
      value: adjusted.stack
    });
  }
}
function run_micro_tasks() {
  var tasks2 = micro_tasks;
  micro_tasks = [];
  run_all(tasks2);
}
function run_idle_tasks() {
  var tasks2 = idle_tasks;
  idle_tasks = [];
  run_all(tasks2);
}
function flush_tasks() {
  if (micro_tasks.length > 0) {
    run_micro_tasks();
  }
  if (idle_tasks.length > 0) {
    run_idle_tasks();
  }
}
function destroy_derived_effects(derived) {
  var effects = derived.effects;
  if (effects !== null) {
    derived.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
function get_derived_parent_effect(derived) {
  var parent = derived.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived));
  {
    try {
      destroy_derived_effects(derived);
      value = update_reaction(derived);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived) {
  var value = execute_derived(derived);
  if (!derived.equals(value)) {
    derived.v = value;
    derived.wv = increment_write_version();
  }
  if (is_destroying_effect) {
    return;
  }
  if (batch_deriveds !== null) {
    batch_deriveds.set(derived, derived.v);
  } else {
    var status = (skip_reaction || (derived.f & UNOWNED) !== 0) && derived.deps !== null ? MAYBE_DIRTY : CLEAN;
    set_signal_status(derived, status);
  }
}
function dequeue() {
  const task = (
    /** @type {() => void} */
    tasks.shift()
  );
  if (tasks.length > 0) {
    queueMicrotask(dequeue);
  }
  task();
}
function flushSync(fn) {
  var was_flushing_sync = is_flushing_sync;
  is_flushing_sync = true;
  try {
    var result;
    if (fn) ;
    while (true) {
      flush_tasks();
      if (queued_root_effects.length === 0) {
        current_batch?.flush();
        if (queued_root_effects.length === 0) {
          last_scheduled_effect = null;
          return (
            /** @type {T} */
            result
          );
        }
      }
      flush_effects();
    }
  } finally {
    is_flushing_sync = was_flushing_sync;
  }
}
function flush_effects() {
  var was_updating_effect = is_updating_effect;
  is_flushing = true;
  try {
    var flush_count = 0;
    set_is_updating_effect(true);
    while (queued_root_effects.length > 0) {
      var batch = Batch.ensure();
      if (flush_count++ > 1e3) {
        var updates, entry;
        if (DEV) ;
        infinite_loop_guard();
      }
      batch.process(queued_root_effects);
      old_values.clear();
    }
  } finally {
    is_flushing = false;
    set_is_updating_effect(was_updating_effect);
    last_scheduled_effect = null;
  }
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error2) {
    invoke_error_boundary(error2, last_scheduled_effect);
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  var i = 0;
  while (i < length) {
    var effect = effects[i++];
    if ((effect.f & (DESTROYED | INERT)) === 0 && is_dirty(effect)) {
      var n2 = current_batch ? current_batch.current.size : 0;
      update_effect(effect);
      if (effect.deps === null && effect.first === null && effect.nodes_start === null) {
        if (effect.teardown === null && effect.ac === null) {
          unlink_effect(effect);
        } else {
          effect.fn = null;
        }
      }
      if (current_batch !== null && current_batch.current.size > n2 && (effect.f & USER_EFFECT) !== 0) {
        break;
      }
    }
  }
  while (i < length) {
    schedule_effect(effects[i++]);
  }
}
function schedule_effect(signal) {
  var effect = last_scheduled_effect = signal;
  while (effect.parent !== null) {
    effect = effect.parent;
    var flags = effect.f;
    if (is_flushing && effect === active_effect && (flags & BLOCK_EFFECT) !== 0) {
      return;
    }
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect);
}
function source(v, stack) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v, stack) {
  const s3 = source(v);
  push_reaction_value(s3);
  return s3;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable2 = false, trackable = true) {
  const s3 = source(initial_value);
  if (!immutable2) {
    s3.equals = safe_equals;
  }
  return s3;
}
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!untracking || (active_reaction.f & INSPECT_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | INSPECT_EFFECT)) !== 0 && !current_sources?.includes(source2)) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  return internal_set(source2, new_value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    var batch = Batch.ensure();
    batch.capture(source2, old_value);
    if ((source2.f & DERIVED) !== 0) {
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(
          /** @type {Derived} */
          source2
        );
      }
      set_signal_status(source2, (source2.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
  }
  return value;
}
function increment(source2) {
  set(source2, source2.v + 1);
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags = reaction.f;
    var not_dirty = (flags & DIRTY) === 0;
    if (not_dirty) {
      set_signal_status(reaction, status);
    }
    if ((flags & DERIVED) !== 0) {
      mark_reactions(
        /** @type {Derived} */
        reaction,
        MAYBE_DIRTY
      );
    } else if (not_dirty) {
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = /* @__PURE__ */ state(0);
  var parent_version = update_version;
  var with_parent = (fn) => {
    if (update_version === parent_version) {
      return fn();
    }
    var reaction = active_reaction;
    var version2 = update_version;
    set_active_reaction(null);
    set_update_version(parent_version);
    var result = fn();
    set_active_reaction(reaction);
    set_update_version(version2);
    return result;
  };
  if (is_proxied_array) {
    sources.set("length", /* @__PURE__ */ state(
      /** @type {any[]} */
      value.length
    ));
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s3 = sources.get(prop);
        if (s3 === void 0) {
          s3 = with_parent(() => {
            var s22 = /* @__PURE__ */ state(descriptor.value);
            sources.set(prop, s22);
            return s22;
          });
        } else {
          set(s3, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop) {
        var s3 = sources.get(prop);
        if (s3 === void 0) {
          if (prop in target) {
            const s22 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
            sources.set(prop, s22);
            increment(version);
          }
        } else {
          set(s3, UNINITIALIZED);
          increment(version);
        }
        return true;
      },
      get(target, prop, receiver) {
        if (prop === STATE_SYMBOL) {
          return value;
        }
        var s3 = sources.get(prop);
        var exists = prop in target;
        if (s3 === void 0 && (!exists || get_descriptor(target, prop)?.writable)) {
          s3 = with_parent(() => {
            var p2 = proxy(exists ? target[prop] : UNINITIALIZED);
            var s22 = /* @__PURE__ */ state(p2);
            return s22;
          });
          sources.set(prop, s3);
        }
        if (s3 !== void 0) {
          var v = get(s3);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop, receiver);
      },
      getOwnPropertyDescriptor(target, prop) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor && "value" in descriptor) {
          var s3 = sources.get(prop);
          if (s3) descriptor.value = get(s3);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop) {
        if (prop === STATE_SYMBOL) {
          return true;
        }
        var s3 = sources.get(prop);
        var has = s3 !== void 0 && s3.v !== UNINITIALIZED || Reflect.has(target, prop);
        if (s3 !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop)?.writable)) {
          if (s3 === void 0) {
            s3 = with_parent(() => {
              var p2 = has ? proxy(target[prop]) : UNINITIALIZED;
              var s22 = /* @__PURE__ */ state(p2);
              return s22;
            });
            sources.set(prop, s3);
          }
          var value2 = get(s3);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop, value2, receiver) {
        var s3 = sources.get(prop);
        var has = prop in target;
        if (is_proxied_array && prop === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s3.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(i + "", other_s);
            }
          }
        }
        if (s3 === void 0) {
          if (!has || get_descriptor(target, prop)?.writable) {
            s3 = with_parent(() => /* @__PURE__ */ state(void 0));
            set(s3, proxy(value2));
            sources.set(prop, s3);
          }
        } else {
          has = s3.v !== UNINITIALIZED;
          var p2 = with_parent(() => proxy(value2));
          set(s3, p2);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n2 = Number(prop);
            if (Number.isInteger(n2) && n2 >= ls.v) {
              set(ls, n2 + 1);
            }
          }
          increment(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key22) => {
          var source3 = sources.get(key22);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key3, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key3 in target)) {
            own_keys.push(key3);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype.__click = void 0;
    element_prototype.__className = void 0;
    element_prototype.__attributes = null;
    element_prototype.__style = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype.__t = void 0;
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node2) {
  return first_child_getter.call(node2);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node2) {
  return next_sibling_getter.call(node2);
}
function clear_text_content(node2) {
  node2.textContent = "";
}
function push_effect(effect, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect;
  } else {
    parent_last.next = effect;
    effect.prev = parent_last;
    parent_effect.last = effect;
  }
}
function create_effect(type, fn, sync, push22 = true) {
  var parent = active_effect;
  if (parent !== null && (parent.f & INERT) !== 0) {
    type |= INERT;
  }
  var effect = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    b: parent && parent.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (sync) {
    try {
      update_effect(effect);
      effect.f |= EFFECT_RAN;
    } catch (e3) {
      destroy_effect(effect);
      throw e3;
    }
  } else if (fn !== null) {
    schedule_effect(effect);
  }
  var inert = sync && effect.deps === null && effect.first === null && effect.nodes_start === null && effect.teardown === null && (effect.f & EFFECT_PRESERVED) === 0;
  if (!inert && push22) {
    if (parent !== null) {
      push_effect(effect, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived = (
        /** @type {Derived} */
        active_reaction
      );
      (derived.effects ??= []).push(effect);
    }
  }
  return effect;
}
function create_user_effect(fn) {
  return create_effect(EFFECT | USER_EFFECT, fn, false);
}
function component_root(fn) {
  Batch.ensure();
  const effect = create_effect(ROOT_EFFECT, fn, true);
  return (options2 = {}) => {
    return new Promise((fulfil) => {
      if (options2.outro) {
        pause_effect(effect, () => {
          destroy_effect(effect);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect);
        fulfil(void 0);
      }
    });
  };
}
function branch(fn, push22 = true) {
  return create_effect(BRANCH_EFFECT, fn, true, push22);
}
function execute_effect_teardown(effect) {
  var teardown = effect.teardown;
  if (teardown !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect = signal.first;
  signal.first = signal.last = null;
  while (effect !== null) {
    effect.ac?.abort(STALE_REACTION);
    var next = effect.next;
    if ((effect.f & ROOT_EFFECT) !== 0) {
      effect.parent = null;
    } else {
      destroy_effect(effect, remove_dom);
    }
    effect = next;
  }
}
function destroy_block_effect_children(signal) {
  var effect = signal.first;
  while (effect !== null) {
    var next = effect.next;
    if ((effect.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect);
    }
    effect = next;
  }
}
function destroy_effect(effect, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect.f & HEAD_EFFECT) !== 0) && effect.nodes_start !== null && effect.nodes_end !== null) {
    remove_effect_dom(
      effect.nodes_start,
      /** @type {TemplateNode} */
      effect.nodes_end
    );
    removed = true;
  }
  destroy_effect_children(effect, remove_dom && !removed);
  remove_reactions(effect, 0);
  set_signal_status(effect, DESTROYED);
  var transitions = effect.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect);
  var parent = effect.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect);
  }
  effect.next = effect.prev = effect.teardown = effect.ctx = effect.deps = effect.fn = effect.nodes_start = effect.nodes_end = effect.ac = null;
}
function remove_effect_dom(node2, end) {
  while (node2 !== null) {
    var next = node2 === end ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node2)
    );
    node2.remove();
    node2 = next;
  }
}
function unlink_effect(effect) {
  var parent = effect.parent;
  var prev = effect.prev;
  var next = effect.next;
  if (prev !== null) prev.next = next;
  if (next !== null) next.prev = prev;
  if (parent !== null) {
    if (parent.first === effect) parent.first = next;
    if (parent.last === effect) parent.last = prev;
  }
}
function pause_effect(effect, callback) {
  var transitions = [];
  pause_children(effect, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect, transitions, local) {
  if ((effect.f & INERT) !== 0) return;
  effect.f ^= INERT;
  if (effect.transitions !== null) {
    for (const transition of effect.transitions) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child = effect.first;
  while (child !== null) {
    var sibling = child.next;
    var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || (child.f & BRANCH_EFFECT) !== 0;
    pause_children(child, transitions, transparent ? local : false);
    child = sibling;
  }
}
function set_is_updating_effect(value) {
  is_updating_effect = value;
}
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
function set_active_effect(effect) {
  active_effect = effect;
}
function push_reaction_value(value) {
  if (active_reaction !== null && true) {
    if (current_sources === null) {
      current_sources = [value];
    } else {
      current_sources.push(value);
    }
  }
}
function set_untracked_writes(value) {
  untracked_writes = value;
}
function set_update_version(value) {
  update_version = value;
}
function increment_write_version() {
  return ++write_version;
}
function is_dirty(reaction) {
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      var dependency;
      var is_disconnected = (flags & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if ((is_disconnected || is_unowned_connected) && (active_effect === null || (active_effect.f & DESTROYED) === 0)) {
        var derived = (
          /** @type {Derived} */
          reaction
        );
        var parent = derived.parent;
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_disconnected || !dependency?.reactions?.includes(derived)) {
            (dependency.reactions ??= []).push(derived);
          }
        }
        if (is_disconnected) {
          derived.f ^= DISCONNECTED;
        }
        if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
          derived.f ^= UNOWNED;
        }
      }
      for (i = 0; i < length; i++) {
        dependency = dependencies[i];
        if (is_dirty(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect, root6 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  if (current_sources?.includes(signal)) {
    return;
  }
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect,
        false
      );
    } else if (effect === reaction) {
      if (root6) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var previous_sources = current_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var previous_update_version = update_version;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  skip_reaction = (flags & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  current_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  update_version = ++read_version;
  if (reaction.ac !== null) {
    reaction.ac.abort(STALE_REACTION);
    reaction.ac = null;
  }
  try {
    reaction.f |= REACTION_IS_UPDATING;
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (flags & DERIVED) !== 0 && /** @type {import('#client').Derived} */
      reaction.reactions !== null) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    if ((reaction.f & ERROR_VALUE) !== 0) {
      reaction.f ^= ERROR_VALUE;
    }
    return result;
  } catch (error2) {
    return handle_error(error2);
  } finally {
    reaction.f ^= REACTION_IS_UPDATING;
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    current_sources = previous_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    update_version = previous_update_version;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index11 = index_of.call(reactions, signal);
    if (index11 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index11] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect) {
  var flags = effect.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect;
  is_updating_effect = true;
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect);
    } else {
      destroy_effect_children(effect);
    }
    execute_effect_teardown(effect);
    var teardown = update_reaction(effect);
    effect.teardown = typeof teardown === "function" ? teardown : null;
    effect.wv = write_version;
    var dep;
    if (DEV && tracing_mode_flag && (effect.f & DIRTY) !== 0 && effect.deps !== null) ;
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
  }
}
function get(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
    if (!destroyed && !current_sources?.includes(signal)) {
      var deps = active_reaction.deps;
      if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else if (!skip_reaction || !new_deps.includes(signal)) {
            new_deps.push(signal);
          }
        }
      } else {
        (active_reaction.deps ??= []).push(signal);
        var reactions = signal.reactions;
        if (reactions === null) {
          signal.reactions = [active_reaction];
        } else if (!reactions.includes(active_reaction)) {
          reactions.push(active_reaction);
        }
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived = (
      /** @type {Derived} */
      signal
    );
    var parent = derived.parent;
    if (parent !== null && (parent.f & UNOWNED) === 0) {
      derived.f ^= UNOWNED;
    }
  }
  if (is_destroying_effect) {
    if (old_values.has(signal)) {
      return old_values.get(signal);
    }
    if (is_derived) {
      derived = /** @type {Derived} */
      signal;
      var value = derived.v;
      if ((derived.f & CLEAN) === 0 && derived.reactions !== null || depends_on_old_values(derived)) {
        value = execute_derived(derived);
      }
      old_values.set(derived, value);
      return value;
    }
  } else if (is_derived) {
    derived = /** @type {Derived} */
    signal;
    if (batch_deriveds?.has(derived)) {
      return batch_deriveds.get(derived);
    }
    if (is_dirty(derived)) {
      update_derived(derived);
    }
  }
  if ((signal.f & ERROR_VALUE) !== 0) {
    throw signal.v;
  }
  return signal.v;
}
function depends_on_old_values(derived) {
  if (derived.v === UNINITIALIZED) return true;
  if (derived.deps === null) return false;
  for (const dep of derived.deps) {
    if (old_values.has(dep)) {
      return true;
    }
    if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
      /** @type {Derived} */
      dep
    )) {
      return true;
    }
  }
  return false;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function clsx2(value) {
  if (typeof value === "object") {
    return clsx(value);
  } else {
    return value ?? "";
  }
}
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  return classname === "" ? null : classname;
}
function subscribe_to_store(store, run, invalidate) {
  if (store == null) {
    run(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function getContext(key3) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key3)
  );
  return result;
}
function setContext(key3, context2) {
  get_or_init_context_map().set(key3, context2);
  return context2;
}
function get_or_init_context_map(name) {
  if (current_component === null) {
    lifecycle_outside_component();
  }
  return current_component.c ??= new Map(get_parent_context(current_component) || void 0);
}
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component10 = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component10.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component10.p;
}
function get_parent_context(component_context2) {
  let parent = component_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
function props_id_generator(prefix) {
  let uid = 1;
  return () => `${prefix}s${uid++}`;
}
function abort() {
  controller?.abort(STALE_REACTION);
  controller = null;
}
function render(component10, options2 = {}) {
  try {
    const payload = new Payload(options2.idPrefix ? options2.idPrefix + "-" : "");
    const prev_on_destroy = on_destroy;
    on_destroy = [];
    payload.out.push(BLOCK_OPEN);
    let reset_reset_element;
    if (DEV) ;
    if (options2.context) {
      push();
      current_component.c = options2.context;
    }
    component10(payload, options2.props ?? {}, {}, {});
    if (options2.context) {
      pop();
    }
    if (reset_reset_element) {
      reset_reset_element();
    }
    payload.out.push(BLOCK_CLOSE);
    for (const cleanup of on_destroy) cleanup();
    on_destroy = prev_on_destroy;
    let head22 = payload.head.out.join("") + payload.head.title;
    for (const { hash: hash2, code: code3 } of payload.css) {
      head22 += `<style id="${hash2}">${code3}</style>`;
    }
    const body4 = payload.out.join("");
    return {
      head: head22,
      html: body4,
      body: body4
    };
  } finally {
    abort();
  }
}
function head(payload, fn) {
  const head_payload = payload.head;
  head_payload.out.push(BLOCK_OPEN);
  fn(head_payload);
  head_payload.out.push(BLOCK_CLOSE);
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function attr_class(value, hash2, directives) {
  var result = to_class(value);
  return result ? ` class="${escape_html(result, true)}"` : "";
}
function store_get(store_values, store_name, store) {
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v) => store_values[store_name][2] = v
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
function slot(payload, $$props, name, slot_props, fallback_fn) {
  var slot_fn = $$props.$$slots?.[name];
  if (slot_fn === true) {
    slot_fn = $$props["children"];
  }
  if (slot_fn !== void 0) {
    slot_fn(payload, slot_props);
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
var DEV, is_array, index_of, array_from, define_property, get_descriptor, object_prototype, array_prototype, get_prototype_of, is_extensible, noop, DERIVED, EFFECT, BLOCK_EFFECT, BRANCH_EFFECT, ROOT_EFFECT, BOUNDARY_EFFECT, UNOWNED, DISCONNECTED, CLEAN, DIRTY, MAYBE_DIRTY, INERT, DESTROYED, EFFECT_RAN, EFFECT_TRANSPARENT, INSPECT_EFFECT, HEAD_EFFECT, EFFECT_PRESERVED, USER_EFFECT, REACTION_IS_UPDATING, ASYNC, ERROR_VALUE, STATE_SYMBOL, LEGACY_PROPS, STALE_REACTION, COMMENT_NODE, HYDRATION_START, HYDRATION_END, HYDRATION_ERROR, UNINITIALIZED, tracing_mode_flag, component_context, adjustments, micro_tasks, idle_tasks, batches, current_batch, batch_deriveds, effect_pending_updates, tasks, queued_root_effects, last_scheduled_effect, is_flushing, is_flushing_sync, Batch, old_values, $window, first_child_getter, next_sibling_getter, is_updating_effect, is_destroying_effect, active_reaction, untracking, active_effect, current_sources, new_deps, skipped_deps, untracked_writes, write_version, read_version, update_version, skip_reaction, STATUS_MASK, ATTR_REGEX, CONTENT_REGEX, replacements, current_component, BLOCK_OPEN, BLOCK_CLOSE, HeadPayload, Payload, controller, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    init_clsx();
    DEV = false;
    is_array = Array.isArray;
    index_of = Array.prototype.indexOf;
    array_from = Array.from;
    define_property = Object.defineProperty;
    get_descriptor = Object.getOwnPropertyDescriptor;
    object_prototype = Object.prototype;
    array_prototype = Array.prototype;
    get_prototype_of = Object.getPrototypeOf;
    is_extensible = Object.isExtensible;
    noop = () => {
    };
    DERIVED = 1 << 1;
    EFFECT = 1 << 2;
    BLOCK_EFFECT = 1 << 4;
    BRANCH_EFFECT = 1 << 5;
    ROOT_EFFECT = 1 << 6;
    BOUNDARY_EFFECT = 1 << 7;
    UNOWNED = 1 << 8;
    DISCONNECTED = 1 << 9;
    CLEAN = 1 << 10;
    DIRTY = 1 << 11;
    MAYBE_DIRTY = 1 << 12;
    INERT = 1 << 13;
    DESTROYED = 1 << 14;
    EFFECT_RAN = 1 << 15;
    EFFECT_TRANSPARENT = 1 << 16;
    INSPECT_EFFECT = 1 << 17;
    HEAD_EFFECT = 1 << 18;
    EFFECT_PRESERVED = 1 << 19;
    USER_EFFECT = 1 << 20;
    REACTION_IS_UPDATING = 1 << 21;
    ASYNC = 1 << 22;
    ERROR_VALUE = 1 << 23;
    STATE_SYMBOL = Symbol("$state");
    LEGACY_PROPS = Symbol("legacy props");
    STALE_REACTION = new class StaleReactionError extends Error {
      name = "StaleReactionError";
      message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
    }();
    COMMENT_NODE = 8;
    HYDRATION_START = "[";
    HYDRATION_END = "]";
    HYDRATION_ERROR = {};
    UNINITIALIZED = Symbol();
    tracing_mode_flag = false;
    component_context = null;
    adjustments = /* @__PURE__ */ new WeakMap();
    micro_tasks = [];
    idle_tasks = [];
    batches = /* @__PURE__ */ new Set();
    current_batch = null;
    batch_deriveds = null;
    effect_pending_updates = /* @__PURE__ */ new Set();
    tasks = [];
    queued_root_effects = [];
    last_scheduled_effect = null;
    is_flushing = false;
    is_flushing_sync = false;
    Batch = class _Batch {
      /**
       * The current values of any sources that are updated in this batch
       * They keys of this map are identical to `this.#previous`
       * @type {Map<Source, any>}
       */
      current = /* @__PURE__ */ new Map();
      /**
       * The values of any sources that are updated in this batch _before_ those updates took place.
       * They keys of this map are identical to `this.#current`
       * @type {Map<Source, any>}
       */
      #previous = /* @__PURE__ */ new Map();
      /**
       * When the batch is committed (and the DOM is updated), we need to remove old branches
       * and append new ones by calling the functions added inside (if/each/key/etc) blocks
       * @type {Set<() => void>}
       */
      #callbacks = /* @__PURE__ */ new Set();
      /**
       * The number of async effects that are currently in flight
       */
      #pending = 0;
      /**
       * A deferred that resolves when the batch is committed, used with `settled()`
       * TODO replace with Promise.withResolvers once supported widely enough
       * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
       */
      #deferred = null;
      /**
       * True if an async effect inside this batch resolved and
       * its parent branch was already deleted
       */
      #neutered = false;
      /**
       * Async effects (created inside `async_derived`) encountered during processing.
       * These run after the rest of the batch has updated, since they should
       * always have the latest values
       * @type {Effect[]}
       */
      #async_effects = [];
      /**
       * The same as `#async_effects`, but for effects inside a newly-created
       * `<svelte:boundary>` — these do not prevent the batch from committing
       * @type {Effect[]}
       */
      #boundary_async_effects = [];
      /**
       * Template effects and `$effect.pre` effects, which run when
       * a batch is committed
       * @type {Effect[]}
       */
      #render_effects = [];
      /**
       * The same as `#render_effects`, but for `$effect` (which runs after)
       * @type {Effect[]}
       */
      #effects = [];
      /**
       * Block effects, which may need to re-run on subsequent flushes
       * in order to update internal sources (e.g. each block items)
       * @type {Effect[]}
       */
      #block_effects = [];
      /**
       * Deferred effects (which run after async work has completed) that are DIRTY
       * @type {Effect[]}
       */
      #dirty_effects = [];
      /**
       * Deferred effects that are MAYBE_DIRTY
       * @type {Effect[]}
       */
      #maybe_dirty_effects = [];
      /**
       * A set of branches that still exist, but will be destroyed when this batch
       * is committed — we skip over these during `process`
       * @type {Set<Effect>}
       */
      skipped_effects = /* @__PURE__ */ new Set();
      /**
       *
       * @param {Effect[]} root_effects
       */
      process(root_effects) {
        queued_root_effects = [];
        var current_values = null;
        if (batches.size > 1) {
          current_values = /* @__PURE__ */ new Map();
          batch_deriveds = /* @__PURE__ */ new Map();
          for (const [source2, current] of this.current) {
            current_values.set(source2, { v: source2.v, wv: source2.wv });
            source2.v = current;
          }
          for (const batch of batches) {
            if (batch === this) continue;
            for (const [source2, previous2] of batch.#previous) {
              if (!current_values.has(source2)) {
                current_values.set(source2, { v: source2.v, wv: source2.wv });
                source2.v = previous2;
              }
            }
          }
        }
        for (const root6 of root_effects) {
          this.#traverse_effect_tree(root6);
        }
        if (this.#async_effects.length === 0 && this.#pending === 0) {
          this.#commit();
          var render_effects = this.#render_effects;
          var effects = this.#effects;
          this.#render_effects = [];
          this.#effects = [];
          this.#block_effects = [];
          current_batch = null;
          flush_queued_effects(render_effects);
          flush_queued_effects(effects);
          if (current_batch === null) {
            current_batch = this;
          } else {
            batches.delete(this);
          }
          this.#deferred?.resolve();
        } else {
          this.#defer_effects(this.#render_effects);
          this.#defer_effects(this.#effects);
          this.#defer_effects(this.#block_effects);
        }
        if (current_values) {
          for (const [source2, { v, wv }] of current_values) {
            if (source2.wv <= wv) {
              source2.v = v;
            }
          }
          batch_deriveds = null;
        }
        for (const effect of this.#async_effects) {
          update_effect(effect);
        }
        for (const effect of this.#boundary_async_effects) {
          update_effect(effect);
        }
        this.#async_effects = [];
        this.#boundary_async_effects = [];
      }
      /**
       * Traverse the effect tree, executing effects or stashing
       * them for later execution as appropriate
       * @param {Effect} root
       */
      #traverse_effect_tree(root6) {
        root6.f ^= CLEAN;
        var effect = root6.first;
        while (effect !== null) {
          var flags = effect.f;
          var is_branch = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
          var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
          var skip = is_skippable_branch || (flags & INERT) !== 0 || this.skipped_effects.has(effect);
          if (!skip && effect.fn !== null) {
            if (is_branch) {
              effect.f ^= CLEAN;
            } else if ((flags & CLEAN) === 0) {
              if ((flags & EFFECT) !== 0) {
                this.#effects.push(effect);
              } else if ((flags & ASYNC) !== 0) {
                var effects = effect.b?.pending ? this.#boundary_async_effects : this.#async_effects;
                effects.push(effect);
              } else if (is_dirty(effect)) {
                if ((effect.f & BLOCK_EFFECT) !== 0) this.#block_effects.push(effect);
                update_effect(effect);
              }
            }
            var child = effect.first;
            if (child !== null) {
              effect = child;
              continue;
            }
          }
          var parent = effect.parent;
          effect = effect.next;
          while (effect === null && parent !== null) {
            effect = parent.next;
            parent = parent.parent;
          }
        }
      }
      /**
       * @param {Effect[]} effects
       */
      #defer_effects(effects) {
        for (const e3 of effects) {
          const target = (e3.f & DIRTY) !== 0 ? this.#dirty_effects : this.#maybe_dirty_effects;
          target.push(e3);
          set_signal_status(e3, CLEAN);
        }
        effects.length = 0;
      }
      /**
       * Associate a change to a given source with the current
       * batch, noting its previous and current values
       * @param {Source} source
       * @param {any} value
       */
      capture(source2, value) {
        if (!this.#previous.has(source2)) {
          this.#previous.set(source2, value);
        }
        this.current.set(source2, source2.v);
      }
      activate() {
        current_batch = this;
      }
      deactivate() {
        current_batch = null;
        for (const update of effect_pending_updates) {
          effect_pending_updates.delete(update);
          update();
          if (current_batch !== null) {
            break;
          }
        }
      }
      neuter() {
        this.#neutered = true;
      }
      flush() {
        if (queued_root_effects.length > 0) {
          flush_effects();
        } else {
          this.#commit();
        }
        if (current_batch !== this) {
          return;
        }
        if (this.#pending === 0) {
          batches.delete(this);
        }
        this.deactivate();
      }
      /**
       * Append and remove branches to/from the DOM
       */
      #commit() {
        if (!this.#neutered) {
          for (const fn of this.#callbacks) {
            fn();
          }
        }
        this.#callbacks.clear();
      }
      increment() {
        this.#pending += 1;
      }
      decrement() {
        this.#pending -= 1;
        if (this.#pending === 0) {
          for (const e3 of this.#dirty_effects) {
            set_signal_status(e3, DIRTY);
            schedule_effect(e3);
          }
          for (const e3 of this.#maybe_dirty_effects) {
            set_signal_status(e3, MAYBE_DIRTY);
            schedule_effect(e3);
          }
          this.#render_effects = [];
          this.#effects = [];
          this.flush();
        } else {
          this.deactivate();
        }
      }
      /** @param {() => void} fn */
      add_callback(fn) {
        this.#callbacks.add(fn);
      }
      settled() {
        return (this.#deferred ??= deferred()).promise;
      }
      static ensure() {
        if (current_batch === null) {
          const batch = current_batch = new _Batch();
          batches.add(current_batch);
          if (!is_flushing_sync) {
            _Batch.enqueue(() => {
              if (current_batch !== batch) {
                return;
              }
              batch.flush();
            });
          }
        }
        return current_batch;
      }
      /** @param {() => void} task */
      static enqueue(task) {
        if (tasks.length === 0) {
          queueMicrotask(dequeue);
        }
        tasks.unshift(task);
      }
    };
    old_values = /* @__PURE__ */ new Map();
    is_updating_effect = false;
    is_destroying_effect = false;
    active_reaction = null;
    untracking = false;
    active_effect = null;
    current_sources = null;
    new_deps = null;
    skipped_deps = 0;
    untracked_writes = null;
    write_version = 1;
    read_version = 0;
    update_version = read_version;
    skip_reaction = false;
    STATUS_MASK = -7169;
    ATTR_REGEX = /[&"<]/g;
    CONTENT_REGEX = /[&<]/g;
    replacements = {
      translate: /* @__PURE__ */ new Map([
        [true, "yes"],
        [false, "no"]
      ])
    };
    current_component = null;
    BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
    BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
    HeadPayload = class {
      /** @type {Set<{ hash: string; code: string }>} */
      css = /* @__PURE__ */ new Set();
      /** @type {string[]} */
      out = [];
      uid = () => "";
      title = "";
      constructor(css = /* @__PURE__ */ new Set(), out = [], title = "", uid = () => "") {
        this.css = css;
        this.out = out;
        this.title = title;
        this.uid = uid;
      }
    };
    Payload = class {
      /** @type {Set<{ hash: string; code: string }>} */
      css = /* @__PURE__ */ new Set();
      /** @type {string[]} */
      out = [];
      uid = () => "";
      select_value = void 0;
      head = new HeadPayload();
      constructor(id_prefix = "") {
        this.uid = props_id_generator(id_prefix);
        this.head.uid = this.uid;
      }
    };
    controller = null;
    on_destroy = [];
  }
});

// node_modules/@sveltejs/kit/src/exports/internal/index.js
var HttpError, Redirect, SvelteKitError, ActionFailure;
var init_internal = __esm({
  "node_modules/@sveltejs/kit/src/exports/internal/index.js"() {
    HttpError = class {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body4) {
        this.status = status;
        if (typeof body4 === "string") {
          this.body = { message: body4 };
        } else if (body4) {
          this.body = body4;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    SvelteKitError = class extends Error {
      /**
       * @param {number} status
       * @param {string} text
       * @param {string} message
       */
      constructor(status, text8, message) {
        super(message);
        this.status = status;
        this.text = text8;
      }
    };
    ActionFailure = class {
      /**
       * @param {number} status
       * @param {T} data
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
  }
});

// node_modules/esm-env/true.js
var true_default;
var init_true = __esm({
  "node_modules/esm-env/true.js"() {
    true_default = true;
  }
});

// node_modules/esm-env/dev-fallback.js
var node_env, dev_fallback_default;
var init_dev_fallback = __esm({
  "node_modules/esm-env/dev-fallback.js"() {
    node_env = globalThis.process?.env?.NODE_ENV;
    dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");
  }
});

// node_modules/esm-env/false.js
var init_false = __esm({
  "node_modules/esm-env/false.js"() {
  }
});

// node_modules/esm-env/index.js
var init_esm_env = __esm({
  "node_modules/esm-env/index.js"() {
    init_true();
    init_dev_fallback();
    init_false();
  }
});

// node_modules/@sveltejs/kit/src/runtime/pathname.js
var init_pathname = __esm({
  "node_modules/@sveltejs/kit/src/runtime/pathname.js"() {
  }
});

// node_modules/@sveltejs/kit/src/version.js
var init_version = __esm({
  "node_modules/@sveltejs/kit/src/version.js"() {
  }
});

// node_modules/@sveltejs/kit/src/exports/index.js
function error(status, body4) {
  if ((!true_default || dev_fallback_default) && (isNaN(status) || status < 400 || status > 599)) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  throw new HttpError(status, body4);
}
function json(data, init2) {
  const body4 = JSON.stringify(data);
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    headers2.set("content-length", encoder.encode(body4).byteLength.toString());
  }
  if (!headers2.has("content-type")) {
    headers2.set("content-type", "application/json");
  }
  return new Response(body4, {
    ...init2,
    headers: headers2
  });
}
function text(body4, init2) {
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    const encoded = encoder.encode(body4);
    headers2.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers: headers2
    });
  }
  return new Response(body4, {
    ...init2,
    headers: headers2
  });
}
var encoder;
var init_exports = __esm({
  "node_modules/@sveltejs/kit/src/exports/index.js"() {
    init_internal();
    init_esm_env();
    init_pathname();
    init_version();
    encoder = new TextEncoder();
  }
});

// .svelte-kit/output/server/chunks/exports.js
function resolve(base2, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base2, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key3 in params) {
    params[key3] = decodeURIComponent(params[key3]);
  }
  return params;
}
function make_trackable(url, callback, search_params_callback, allow_hash = false) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key3) {
        if (key3 === "get" || key3 === "getAll" || key3 === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key3](param);
          };
        }
        callback();
        const value = Reflect.get(obj, key3);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  const tracked_url_properties = ["href", "pathname", "search", "toString", "toJSON"];
  if (allow_hash) tracked_url_properties.push("hash");
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
    tracked.searchParams[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url.searchParams, opts);
    };
  }
  if (!allow_hash) {
    disable_hash(tracked);
  }
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update) || noop;
    }
    run(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update, subscribe };
}
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key3 in module) {
      if (key3[0] === "_" || expected.has(key3)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key3, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key3}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key3, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key3)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key3)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key3)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key3)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key3)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key3}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var internal, subscriber_queue, valid_layout_exports, valid_page_exports, valid_layout_server_exports, valid_page_server_exports, valid_server_exports, validate_layout_exports, validate_page_exports, validate_layout_server_exports, validate_page_server_exports, validate_server_exports;
var init_exports2 = __esm({
  ".svelte-kit/output/server/chunks/exports.js"() {
    init_chunks();
    init_clsx();
    internal = new URL("sveltekit-internal://");
    subscriber_queue = [];
    valid_layout_exports = /* @__PURE__ */ new Set([
      "load",
      "prerender",
      "csr",
      "ssr",
      "trailingSlash",
      "config"
    ]);
    valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
    valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
    valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
    valid_server_exports = /* @__PURE__ */ new Set([
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
      "HEAD",
      "fallback",
      "prerender",
      "trailingSlash",
      "config",
      "entries"
    ]);
    validate_layout_exports = validator(valid_layout_exports);
    validate_page_exports = validator(valid_page_exports);
    validate_layout_server_exports = validator(valid_layout_server_exports);
    validate_page_server_exports = validator(valid_page_server_exports);
    validate_server_exports = validator(valid_server_exports);
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize3;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode2;
      var index11 = 0;
      while (index11 < str.length) {
        var eqIdx = str.indexOf("=", index11);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index11);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index11 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key3 = str.slice(index11, eqIdx).trim();
        if (void 0 === obj[key3]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key3] = tryDecode(val, dec);
        }
        index11 = endIdx + 1;
      }
      return obj;
    }
    function serialize3(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode2(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode3) {
      try {
        return decode3(str);
      } catch (e3) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e3) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e3
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key3 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key3 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key3 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key3 === "secure") {
          cookie.secure = true;
        } else if (key3 === "httponly") {
          cookie.httpOnly = true;
        } else if (key3 === "samesite") {
          cookie.sameSite = value2;
        } else if (key3 === "partitioned") {
          cookie.partitioned = true;
        } else {
          cookie[key3] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key3) {
            return key3.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/state.svelte.js
var is_legacy;
var init_state_svelte = __esm({
  ".svelte-kit/output/server/chunks/state.svelte.js"() {
    init_clsx();
    init_chunks();
    is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
    if (is_legacy) {
      ({
        data: {},
        form: null,
        error: null,
        params: {},
        route: { id: null },
        state: {},
        status: -1,
        url: new URL("https://example.com")
      });
    }
  }
});

// .svelte-kit/output/server/chunks/html.js
function html(value) {
  var html22 = String(value ?? "");
  var open = "<!---->";
  return open + html22 + "<!---->";
}
var init_html = __esm({
  ".svelte-kit/output/server/chunks/html.js"() {
  }
});

// .svelte-kit/output/server/chunks/Icons.js
function Icons($$payload, $$props) {
  let { name, class: className = "", size = 24 } = $$props;
  const icons = {
    github: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />`,
    linkedin: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />`,
    email: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />`,
    external: `<path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />`,
    download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" x2="12" y1="15" y2="3" />`,
    sun: `<circle cx="12" cy="12" r="5" /><path d="M12 1v2" /><path d="M12 21v2" /><path d="M4.22 4.22l1.42 1.42" /><path d="M18.36 18.36l1.42 1.42" /><path d="M1 12h2" /><path d="M21 12h2" /><path d="M4.22 19.78l1.42-1.42" /><path d="M18.36 5.64l1.42-1.42" />`,
    moon: `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />`,
    menu: `<line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />`,
    close: `<path d="M18 6 6 18" /><path d="M6 6l12 12" />`,
    cyber: `<circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v6" /><path d="M9 4.5L7.5 6L9 7.5" /><path d="M15 4.5L16.5 6L15 7.5" /><path d="M9 16.5L7.5 18L9 19.5" /><path d="M15 16.5L16.5 18L15 19.5" /><path d="M20 12h-6m-6 0H2" /><path d="M4.5 9L6 7.5L7.5 9" /><path d="M4.5 15L6 16.5L7.5 15" /><path d="M19.5 9L18 7.5L16.5 9" /><path d="M19.5 15L18 16.5L16.5 15" />`,
    hackerone: `<path d="M11.996 0C5.372 0 0 5.372 0 12s5.372 12 11.996 12C18.628 24 24 18.628 24 12S18.628 0 11.996 0zM8.5 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm7 9c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v7.5z"/>`
  };
  const iconPath = icons[name] || "";
  const isFilled = name === "hackerone";
  $$payload.out.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24"${attr("fill", isFilled ? "currentColor" : "none")}${attr("stroke", isFilled ? "none" : "currentColor")}${attr("stroke-width", isFilled ? "0" : "2")}${attr("stroke-linecap", isFilled ? "butt" : "round")}${attr("stroke-linejoin", isFilled ? "miter" : "round")}${attr_class(clsx2(className))}>${html(iconPath)}</svg>`);
}
var init_Icons = __esm({
  ".svelte-kit/output/server/chunks/Icons.js"() {
    init_chunks();
    init_html();
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
function createThemeStore() {
  const initialTheme = defaultTheme;
  const { subscribe, set: set2, update } = writable(initialTheme);
  return {
    subscribe,
    setTheme: (theme2) => {
      set2(theme2);
    }
  };
}
function ThemeToggle($$payload, $$props) {
  push();
  theme.subscribe((value) => {
  });
  $$payload.out.push(`<button class="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 slate:border-slate-600 slate:bg-slate-800 slate:text-slate-300 slate:hover:bg-slate-700" aria-label="Toggle theme">`);
  Icons($$payload, {
    name: "sun",
    size: 20,
    class: "rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 slate:rotate-180 slate:scale-0"
  });
  $$payload.out.push(`<!----> `);
  Icons($$payload, {
    name: "moon",
    size: 20,
    class: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 slate:rotate-180 slate:scale-0"
  });
  $$payload.out.push(`<!----> <svg class="absolute h-5 w-5 rotate-180 scale-0 transition-all slate:rotate-0 slate:scale-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></button>`);
  pop();
}
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  let mobileMenuOpen = false;
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" }
  ];
  const each_array = ensure_array_like(navigation);
  $$payload.out.push(`<header class="sticky top-0 z-[99998] w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80"><nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"><div class="flex lg:flex-1"><a href="/" class="-m-1.5 p-1.5"><span class="text-xl font-bold text-gray-900 dark:text-white">Majed Abu Sitta</span></a></div> <div class="flex items-center gap-2 lg:hidden">`);
  ThemeToggle($$payload);
  $$payload.out.push(`<!----> <button type="button" class="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"${attr("aria-expanded", mobileMenuOpen)} aria-controls="mobile-menu"><span class="sr-only">${escape_html("Open main menu")}</span> `);
  {
    $$payload.out.push("<!--[!-->");
    Icons($$payload, { name: "menu", size: 24, class: "h-6 w-6" });
  }
  $$payload.out.push(`<!--]--></button></div> <div class="hidden lg:flex lg:gap-x-12"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<a${attr("href", item.href)}${attr_class(`text-sm font-semibold leading-6 transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-gray-300")}`)}>${escape_html(item.name)}</a>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="hidden lg:flex lg:flex-1 lg:justify-end">`);
  ThemeToggle($$payload);
  $$payload.out.push(`<!----></div></nav></header> `);
  if (typeof document !== "undefined") {
    $$payload.out.push("<!--[-->");
    const each_array_1 = ensure_array_like(navigation);
    $$payload.out.push(`<div class="lg:hidden"><div${attr_class(`fixed inset-0 z-[99999] ${stringify("pointer-events-none")}`)} role="dialog" aria-modal="true"><div${attr_class(`fixed inset-0 bg-gray-600/75 backdrop-blur-sm transition-opacity duration-300 ease-out ${stringify("opacity-0")}`)} role="button" tabindex="0" aria-label="Close mobile menu"></div> <div id="mobile-menu"${attr_class(`fixed inset-y-0 right-0 z-[100000] w-full max-w-sm overflow-y-auto bg-white px-6 py-6 shadow-2xl ring-1 ring-gray-900/10 transform transition-transform duration-300 ease-out dark:bg-gray-900 dark:ring-gray-800 ${stringify("translate-x-full")}`)} style="will-change: transform;"><div class="flex items-center justify-center pb-6 border-b border-gray-200 dark:border-gray-700"><a href="/" class="-m-1.5 p-1.5"><span class="text-xl font-bold text-gray-900 dark:text-white">Majed Abu Sitta</span></a></div> <nav class="mt-6"><div class="space-y-1"><!--[-->`);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$payload.out.push(`<a${attr("href", item.href)}${attr_class(`flex items-center rounded-lg px-3 py-3 text-lg font-medium leading-6 transition-colors hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-700 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" : "text-gray-900 dark:text-gray-100")}`)}>${escape_html(item.name)}</a>`);
    }
    $$payload.out.push(`<!--]--></div></nav></div></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload, $$props) {
  push();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  $$payload.out.push(`<footer class="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"><div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"><div class="flex justify-center space-x-6 md:order-2"><a href="https://github.com/majed-develops" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"><span class="sr-only">GitHub</span> `);
  Icons($$payload, { name: "github", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a> <a href="https://www.linkedin.com/in/majed-bashir" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"><span class="sr-only">LinkedIn</span> `);
  Icons($$payload, { name: "linkedin", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a> <a href="https://hackerone.com/mr_devz" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-orange-500 dark:hover:text-orange-400"><span class="sr-only">HackerOne</span> `);
  Icons($$payload, { name: "hackerone", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a></div> <div class="mt-8 md:order-1 md:mt-0"><p class="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">\xA9 ${escape_html(currentYear)} Majed Abu Sitta. All rights reserved.</p></div></div></footer>`);
  pop();
}
function _layout($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Majed Abu Sitta - Full Stack Developer</title>`;
    $$payload2.out.push(`<meta name="description" content="Professional portfolio of Majed Abu Sitta, a full-stack developer specializing in React, Next.js, and modern web technologies."/> <meta name="keywords" content="Full Stack Developer, React, Next.js, TypeScript, Web Development"/> <meta name="author" content="Majed Abu Sitta"/> <meta property="og:type" content="website"/> <meta property="og:locale" content="en_US"/> <meta property="og:url" content="https://majedabusitta.com"/> <meta property="og:title" content="Majed Abu Sitta - Full Stack Developer"/> <meta property="og:description" content="Professional portfolio showcasing projects, skills, and experience in modern web development."/> <meta property="og:site_name" content="Majed Abu Sitta Portfolio"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Majed Abu Sitta - Full Stack Developer"/> <meta name="twitter:description" content="Professional portfolio showcasing projects, skills, and experience in modern web development."/> <meta name="twitter:creator" content="@majed_bashir"/>`);
  });
  $$payload.out.push(`<div class="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased">`);
  Header($$payload);
  $$payload.out.push(`<!----> <main><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></main> `);
  Footer($$payload);
  $$payload.out.push(`<!----></div>`);
  pop();
}
var getStores, page, defaultTheme, theme;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    init_internal();
    init_exports2();
    init_clsx();
    init_state_svelte();
    init_Icons();
    getStores = () => {
      const stores$1 = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores$1.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores$1.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores$1.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    defaultTheme = "light";
    theme = createThemeStore();
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ??= (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    imports = ["_app/immutable/nodes/0.CfdhjGvi.js", "_app/immutable/chunks/NZTpNUN0.js", "_app/immutable/chunks/DOFDCt5E.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/Cq5Sg4Pf.js", "_app/immutable/chunks/TMDQaXup.js", "_app/immutable/chunks/hGDXmQVd.js", "_app/immutable/chunks/CdlsUkWG.js", "_app/immutable/chunks/BoYayNJO.js", "_app/immutable/chunks/6FRl9e4y.js", "_app/immutable/chunks/CnCqLEN_.js", "_app/immutable/chunks/B3WSMgp5.js", "_app/immutable/chunks/CUAHUuVc.js", "_app/immutable/chunks/mDb9_bB4.js"];
    stylesheets = ["_app/immutable/assets/0.BeW_0wQj.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function create_updated_store() {
  const { set: set2, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
function context() {
  return getContext("__request__");
}
function Error$1($$payload, $$props) {
  push();
  $$payload.out.push(`<h1>${escape_html(page2.status)}</h1> <p>${escape_html(page2.error?.message)}</p>`);
  pop();
}
var stores, page$1, page2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    init_clsx();
    init_state_svelte();
    init_internal();
    init_exports2();
    stores = {
      updated: /* @__PURE__ */ create_updated_store()
    };
    ({
      check: stores.updated.check
    });
    page$1 = {
      get error() {
        return context().page.error;
      },
      get status() {
        return context().page.status;
      }
    };
    page2 = page$1;
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ??= (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    imports2 = ["_app/immutable/nodes/1.YRMGsHQ5.js", "_app/immutable/chunks/NZTpNUN0.js", "_app/immutable/chunks/DOFDCt5E.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/TMDQaXup.js", "_app/immutable/chunks/mDb9_bB4.js", "_app/immutable/chunks/Cq5Sg4Pf.js", "_app/immutable/chunks/CUAHUuVc.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => _page
});
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Majed Abu Sitta - Full Stack Developer</title>`;
  });
  $$payload.out.push(`<div class="relative isolate"><div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div></div> <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">`);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"><div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-600 to-blue-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div></div></div>`);
  pop();
}
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component_cache3, component3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => component_cache3 ??= (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    imports3 = ["_app/immutable/nodes/2.DsrTi0rh.js", "_app/immutable/chunks/NZTpNUN0.js", "_app/immutable/chunks/DOFDCt5E.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/Cq5Sg4Pf.js", "_app/immutable/chunks/TMDQaXup.js", "_app/immutable/chunks/hGDXmQVd.js", "_app/immutable/chunks/6FRl9e4y.js", "_app/immutable/chunks/CnCqLEN_.js", "_app/immutable/chunks/BoYayNJO.js", "_app/immutable/chunks/B3WSMgp5.js", "_app/immutable/chunks/CUAHUuVc.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});

// node_modules/mdast-util-to-string/lib/index.js
function toString(value, options2) {
  const settings = options2 || emptyOptions;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one(value, includeImageAlt, includeHtml);
}
function one(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all(values, includeImageAlt, includeHtml) {
  const result = [];
  let index11 = -1;
  while (++index11 < values.length) {
    result[index11] = one(values[index11], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node(value) {
  return Boolean(value && typeof value === "object");
}
var emptyOptions;
var init_lib = __esm({
  "node_modules/mdast-util-to-string/lib/index.js"() {
    emptyOptions = {};
  }
});

// node_modules/mdast-util-to-string/index.js
var init_mdast_util_to_string = __esm({
  "node_modules/mdast-util-to-string/index.js"() {
    init_lib();
  }
});

// node_modules/character-entities/index.js
var characterEntities;
var init_character_entities = __esm({
  "node_modules/character-entities/index.js"() {
    characterEntities = {
      AElig: "\xC6",
      AMP: "&",
      Aacute: "\xC1",
      Abreve: "\u0102",
      Acirc: "\xC2",
      Acy: "\u0410",
      Afr: "\u{1D504}",
      Agrave: "\xC0",
      Alpha: "\u0391",
      Amacr: "\u0100",
      And: "\u2A53",
      Aogon: "\u0104",
      Aopf: "\u{1D538}",
      ApplyFunction: "\u2061",
      Aring: "\xC5",
      Ascr: "\u{1D49C}",
      Assign: "\u2254",
      Atilde: "\xC3",
      Auml: "\xC4",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      Barwed: "\u2306",
      Bcy: "\u0411",
      Because: "\u2235",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      Bfr: "\u{1D505}",
      Bopf: "\u{1D539}",
      Breve: "\u02D8",
      Bscr: "\u212C",
      Bumpeq: "\u224E",
      CHcy: "\u0427",
      COPY: "\xA9",
      Cacute: "\u0106",
      Cap: "\u22D2",
      CapitalDifferentialD: "\u2145",
      Cayleys: "\u212D",
      Ccaron: "\u010C",
      Ccedil: "\xC7",
      Ccirc: "\u0108",
      Cconint: "\u2230",
      Cdot: "\u010A",
      Cedilla: "\xB8",
      CenterDot: "\xB7",
      Cfr: "\u212D",
      Chi: "\u03A7",
      CircleDot: "\u2299",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      Colon: "\u2237",
      Colone: "\u2A74",
      Congruent: "\u2261",
      Conint: "\u222F",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      Coproduct: "\u2210",
      CounterClockwiseContourIntegral: "\u2233",
      Cross: "\u2A2F",
      Cscr: "\u{1D49E}",
      Cup: "\u22D3",
      CupCap: "\u224D",
      DD: "\u2145",
      DDotrahd: "\u2911",
      DJcy: "\u0402",
      DScy: "\u0405",
      DZcy: "\u040F",
      Dagger: "\u2021",
      Darr: "\u21A1",
      Dashv: "\u2AE4",
      Dcaron: "\u010E",
      Dcy: "\u0414",
      Del: "\u2207",
      Delta: "\u0394",
      Dfr: "\u{1D507}",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      Diamond: "\u22C4",
      DifferentialD: "\u2146",
      Dopf: "\u{1D53B}",
      Dot: "\xA8",
      DotDot: "\u20DC",
      DotEqual: "\u2250",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      Downarrow: "\u21D3",
      Dscr: "\u{1D49F}",
      Dstrok: "\u0110",
      ENG: "\u014A",
      ETH: "\xD0",
      Eacute: "\xC9",
      Ecaron: "\u011A",
      Ecirc: "\xCA",
      Ecy: "\u042D",
      Edot: "\u0116",
      Efr: "\u{1D508}",
      Egrave: "\xC8",
      Element: "\u2208",
      Emacr: "\u0112",
      EmptySmallSquare: "\u25FB",
      EmptyVerySmallSquare: "\u25AB",
      Eogon: "\u0118",
      Eopf: "\u{1D53C}",
      Epsilon: "\u0395",
      Equal: "\u2A75",
      EqualTilde: "\u2242",
      Equilibrium: "\u21CC",
      Escr: "\u2130",
      Esim: "\u2A73",
      Eta: "\u0397",
      Euml: "\xCB",
      Exists: "\u2203",
      ExponentialE: "\u2147",
      Fcy: "\u0424",
      Ffr: "\u{1D509}",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      Fopf: "\u{1D53D}",
      ForAll: "\u2200",
      Fouriertrf: "\u2131",
      Fscr: "\u2131",
      GJcy: "\u0403",
      GT: ">",
      Gamma: "\u0393",
      Gammad: "\u03DC",
      Gbreve: "\u011E",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      Gcy: "\u0413",
      Gdot: "\u0120",
      Gfr: "\u{1D50A}",
      Gg: "\u22D9",
      Gopf: "\u{1D53E}",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      Gt: "\u226B",
      HARDcy: "\u042A",
      Hacek: "\u02C7",
      Hat: "^",
      Hcirc: "\u0124",
      Hfr: "\u210C",
      HilbertSpace: "\u210B",
      Hopf: "\u210D",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      Hstrok: "\u0126",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      IEcy: "\u0415",
      IJlig: "\u0132",
      IOcy: "\u0401",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Icy: "\u0418",
      Idot: "\u0130",
      Ifr: "\u2111",
      Igrave: "\xCC",
      Im: "\u2111",
      Imacr: "\u012A",
      ImaginaryI: "\u2148",
      Implies: "\u21D2",
      Int: "\u222C",
      Integral: "\u222B",
      Intersection: "\u22C2",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      Iogon: "\u012E",
      Iopf: "\u{1D540}",
      Iota: "\u0399",
      Iscr: "\u2110",
      Itilde: "\u0128",
      Iukcy: "\u0406",
      Iuml: "\xCF",
      Jcirc: "\u0134",
      Jcy: "\u0419",
      Jfr: "\u{1D50D}",
      Jopf: "\u{1D541}",
      Jscr: "\u{1D4A5}",
      Jsercy: "\u0408",
      Jukcy: "\u0404",
      KHcy: "\u0425",
      KJcy: "\u040C",
      Kappa: "\u039A",
      Kcedil: "\u0136",
      Kcy: "\u041A",
      Kfr: "\u{1D50E}",
      Kopf: "\u{1D542}",
      Kscr: "\u{1D4A6}",
      LJcy: "\u0409",
      LT: "<",
      Lacute: "\u0139",
      Lambda: "\u039B",
      Lang: "\u27EA",
      Laplacetrf: "\u2112",
      Larr: "\u219E",
      Lcaron: "\u013D",
      Lcedil: "\u013B",
      Lcy: "\u041B",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      LeftRightArrow: "\u2194",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      Leftarrow: "\u21D0",
      Leftrightarrow: "\u21D4",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      LessLess: "\u2AA1",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      Lfr: "\u{1D50F}",
      Ll: "\u22D8",
      Lleftarrow: "\u21DA",
      Lmidot: "\u013F",
      LongLeftArrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      LongRightArrow: "\u27F6",
      Longleftarrow: "\u27F8",
      Longleftrightarrow: "\u27FA",
      Longrightarrow: "\u27F9",
      Lopf: "\u{1D543}",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      Lscr: "\u2112",
      Lsh: "\u21B0",
      Lstrok: "\u0141",
      Lt: "\u226A",
      Map: "\u2905",
      Mcy: "\u041C",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      MinusPlus: "\u2213",
      Mopf: "\u{1D544}",
      Mscr: "\u2133",
      Mu: "\u039C",
      NJcy: "\u040A",
      Nacute: "\u0143",
      Ncaron: "\u0147",
      Ncedil: "\u0145",
      Ncy: "\u041D",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: "\n",
      Nfr: "\u{1D511}",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      Nopf: "\u2115",
      Not: "\u2AEC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      Nscr: "\u{1D4A9}",
      Ntilde: "\xD1",
      Nu: "\u039D",
      OElig: "\u0152",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Ocy: "\u041E",
      Odblac: "\u0150",
      Ofr: "\u{1D512}",
      Ograve: "\xD2",
      Omacr: "\u014C",
      Omega: "\u03A9",
      Omicron: "\u039F",
      Oopf: "\u{1D546}",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      Or: "\u2A54",
      Oscr: "\u{1D4AA}",
      Oslash: "\xD8",
      Otilde: "\xD5",
      Otimes: "\u2A37",
      Ouml: "\xD6",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      PartialD: "\u2202",
      Pcy: "\u041F",
      Pfr: "\u{1D513}",
      Phi: "\u03A6",
      Pi: "\u03A0",
      PlusMinus: "\xB1",
      Poincareplane: "\u210C",
      Popf: "\u2119",
      Pr: "\u2ABB",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      Prime: "\u2033",
      Product: "\u220F",
      Proportion: "\u2237",
      Proportional: "\u221D",
      Pscr: "\u{1D4AB}",
      Psi: "\u03A8",
      QUOT: '"',
      Qfr: "\u{1D514}",
      Qopf: "\u211A",
      Qscr: "\u{1D4AC}",
      RBarr: "\u2910",
      REG: "\xAE",
      Racute: "\u0154",
      Rang: "\u27EB",
      Rarr: "\u21A0",
      Rarrtl: "\u2916",
      Rcaron: "\u0158",
      Rcedil: "\u0156",
      Rcy: "\u0420",
      Re: "\u211C",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      Rfr: "\u211C",
      Rho: "\u03A1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      Rightarrow: "\u21D2",
      Ropf: "\u211D",
      RoundImplies: "\u2970",
      Rrightarrow: "\u21DB",
      Rscr: "\u211B",
      Rsh: "\u21B1",
      RuleDelayed: "\u29F4",
      SHCHcy: "\u0429",
      SHcy: "\u0428",
      SOFTcy: "\u042C",
      Sacute: "\u015A",
      Sc: "\u2ABC",
      Scaron: "\u0160",
      Scedil: "\u015E",
      Scirc: "\u015C",
      Scy: "\u0421",
      Sfr: "\u{1D516}",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      Sigma: "\u03A3",
      SmallCircle: "\u2218",
      Sopf: "\u{1D54A}",
      Sqrt: "\u221A",
      Square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      Sscr: "\u{1D4AE}",
      Star: "\u22C6",
      Sub: "\u22D0",
      Subset: "\u22D0",
      SubsetEqual: "\u2286",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      Sup: "\u22D1",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      Supset: "\u22D1",
      THORN: "\xDE",
      TRADE: "\u2122",
      TSHcy: "\u040B",
      TScy: "\u0426",
      Tab: "	",
      Tau: "\u03A4",
      Tcaron: "\u0164",
      Tcedil: "\u0162",
      Tcy: "\u0422",
      Tfr: "\u{1D517}",
      Therefore: "\u2234",
      Theta: "\u0398",
      ThickSpace: "\u205F\u200A",
      ThinSpace: "\u2009",
      Tilde: "\u223C",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      Topf: "\u{1D54B}",
      TripleDot: "\u20DB",
      Tscr: "\u{1D4AF}",
      Tstrok: "\u0166",
      Uacute: "\xDA",
      Uarr: "\u219F",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      Ubreve: "\u016C",
      Ucirc: "\xDB",
      Ucy: "\u0423",
      Udblac: "\u0170",
      Ufr: "\u{1D518}",
      Ugrave: "\xD9",
      Umacr: "\u016A",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      Uopf: "\u{1D54C}",
      UpArrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      UpEquilibrium: "\u296E",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      Uparrow: "\u21D1",
      Updownarrow: "\u21D5",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      Upsilon: "\u03A5",
      Uring: "\u016E",
      Uscr: "\u{1D4B0}",
      Utilde: "\u0168",
      Uuml: "\xDC",
      VDash: "\u22AB",
      Vbar: "\u2AEB",
      Vcy: "\u0412",
      Vdash: "\u22A9",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      Verbar: "\u2016",
      Vert: "\u2016",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      Vopf: "\u{1D54D}",
      Vscr: "\u{1D4B1}",
      Vvdash: "\u22AA",
      Wcirc: "\u0174",
      Wedge: "\u22C0",
      Wfr: "\u{1D51A}",
      Wopf: "\u{1D54E}",
      Wscr: "\u{1D4B2}",
      Xfr: "\u{1D51B}",
      Xi: "\u039E",
      Xopf: "\u{1D54F}",
      Xscr: "\u{1D4B3}",
      YAcy: "\u042F",
      YIcy: "\u0407",
      YUcy: "\u042E",
      Yacute: "\xDD",
      Ycirc: "\u0176",
      Ycy: "\u042B",
      Yfr: "\u{1D51C}",
      Yopf: "\u{1D550}",
      Yscr: "\u{1D4B4}",
      Yuml: "\u0178",
      ZHcy: "\u0416",
      Zacute: "\u0179",
      Zcaron: "\u017D",
      Zcy: "\u0417",
      Zdot: "\u017B",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      Zfr: "\u2128",
      Zopf: "\u2124",
      Zscr: "\u{1D4B5}",
      aacute: "\xE1",
      abreve: "\u0103",
      ac: "\u223E",
      acE: "\u223E\u0333",
      acd: "\u223F",
      acirc: "\xE2",
      acute: "\xB4",
      acy: "\u0430",
      aelig: "\xE6",
      af: "\u2061",
      afr: "\u{1D51E}",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      alpha: "\u03B1",
      amacr: "\u0101",
      amalg: "\u2A3F",
      amp: "&",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      aogon: "\u0105",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apE: "\u2A70",
      apacir: "\u2A6F",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      approx: "\u2248",
      approxeq: "\u224A",
      aring: "\xE5",
      ascr: "\u{1D4B6}",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      atilde: "\xE3",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      bNot: "\u2AED",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      barvee: "\u22BD",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bnot: "\u2310",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxDL: "\u2557",
      boxDR: "\u2554",
      boxDl: "\u2556",
      boxDr: "\u2553",
      boxH: "\u2550",
      boxHD: "\u2566",
      boxHU: "\u2569",
      boxHd: "\u2564",
      boxHu: "\u2567",
      boxUL: "\u255D",
      boxUR: "\u255A",
      boxUl: "\u255C",
      boxUr: "\u2559",
      boxV: "\u2551",
      boxVH: "\u256C",
      boxVL: "\u2563",
      boxVR: "\u2560",
      boxVh: "\u256B",
      boxVl: "\u2562",
      boxVr: "\u255F",
      boxbox: "\u29C9",
      boxdL: "\u2555",
      boxdR: "\u2552",
      boxdl: "\u2510",
      boxdr: "\u250C",
      boxh: "\u2500",
      boxhD: "\u2565",
      boxhU: "\u2568",
      boxhd: "\u252C",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxuL: "\u255B",
      boxuR: "\u2558",
      boxul: "\u2518",
      boxur: "\u2514",
      boxv: "\u2502",
      boxvH: "\u256A",
      boxvL: "\u2561",
      boxvR: "\u255E",
      boxvh: "\u253C",
      boxvl: "\u2524",
      boxvr: "\u251C",
      bprime: "\u2035",
      breve: "\u02D8",
      brvbar: "\xA6",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      bumpeq: "\u224F",
      cacute: "\u0107",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      ccaps: "\u2A4D",
      ccaron: "\u010D",
      ccedil: "\xE7",
      ccirc: "\u0109",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      cdot: "\u010B",
      cedil: "\xB8",
      cemptyv: "\u29B2",
      cent: "\xA2",
      centerdot: "\xB7",
      cfr: "\u{1D520}",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      chi: "\u03C7",
      cir: "\u25CB",
      cirE: "\u29C3",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledR: "\xAE",
      circledS: "\u24C8",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      clubs: "\u2663",
      clubsuit: "\u2663",
      colon: ":",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      conint: "\u222E",
      copf: "\u{1D554}",
      coprod: "\u2210",
      copy: "\xA9",
      copysr: "\u2117",
      crarr: "\u21B5",
      cross: "\u2717",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      dArr: "\u21D3",
      dHar: "\u2965",
      dagger: "\u2020",
      daleth: "\u2138",
      darr: "\u2193",
      dash: "\u2010",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      dcaron: "\u010F",
      dcy: "\u0434",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      ddotseq: "\u2A77",
      deg: "\xB0",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      dfr: "\u{1D521}",
      dharl: "\u21C3",
      dharr: "\u21C2",
      diam: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      dopf: "\u{1D555}",
      dot: "\u02D9",
      doteq: "\u2250",
      doteqdot: "\u2251",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      downarrow: "\u2193",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      dscr: "\u{1D4B9}",
      dscy: "\u0455",
      dsol: "\u29F6",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      eDDot: "\u2A77",
      eDot: "\u2251",
      eacute: "\xE9",
      easter: "\u2A6E",
      ecaron: "\u011B",
      ecir: "\u2256",
      ecirc: "\xEA",
      ecolon: "\u2255",
      ecy: "\u044D",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      emptyv: "\u2205",
      emsp13: "\u2004",
      emsp14: "\u2005",
      emsp: "\u2003",
      eng: "\u014B",
      ensp: "\u2002",
      eogon: "\u0119",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      equals: "=",
      equest: "\u225F",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erDot: "\u2253",
      erarr: "\u2971",
      escr: "\u212F",
      esdot: "\u2250",
      esim: "\u2242",
      eta: "\u03B7",
      eth: "\xF0",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      expectation: "\u2130",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      fopf: "\u{1D557}",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      fpartint: "\u2A0D",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      fscr: "\u{1D4BB}",
      gE: "\u2267",
      gEl: "\u2A8C",
      gacute: "\u01F5",
      gamma: "\u03B3",
      gammad: "\u03DD",
      gap: "\u2A86",
      gbreve: "\u011F",
      gcirc: "\u011D",
      gcy: "\u0433",
      gdot: "\u0121",
      ge: "\u2265",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      gfr: "\u{1D524}",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      gjcy: "\u0453",
      gl: "\u2277",
      glE: "\u2A92",
      gla: "\u2AA5",
      glj: "\u2AA4",
      gnE: "\u2269",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      gopf: "\u{1D558}",
      grave: "`",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      hArr: "\u21D4",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      hardcy: "\u044A",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      hbar: "\u210F",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      hfr: "\u{1D525}",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      hstrok: "\u0127",
      hybull: "\u2043",
      hyphen: "\u2010",
      iacute: "\xED",
      ic: "\u2063",
      icirc: "\xEE",
      icy: "\u0438",
      iecy: "\u0435",
      iexcl: "\xA1",
      iff: "\u21D4",
      ifr: "\u{1D526}",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      ijlig: "\u0133",
      imacr: "\u012B",
      image: "\u2111",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      intercal: "\u22BA",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      iocy: "\u0451",
      iogon: "\u012F",
      iopf: "\u{1D55A}",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xBF",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isinE: "\u22F9",
      isindot: "\u22F5",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      itilde: "\u0129",
      iukcy: "\u0456",
      iuml: "\xEF",
      jcirc: "\u0135",
      jcy: "\u0439",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      jopf: "\u{1D55B}",
      jscr: "\u{1D4BF}",
      jsercy: "\u0458",
      jukcy: "\u0454",
      kappa: "\u03BA",
      kappav: "\u03F0",
      kcedil: "\u0137",
      kcy: "\u043A",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      khcy: "\u0445",
      kjcy: "\u045C",
      kopf: "\u{1D55C}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      lArr: "\u21D0",
      lAtail: "\u291B",
      lBarr: "\u290E",
      lE: "\u2266",
      lEg: "\u2A8B",
      lHar: "\u2962",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      lambda: "\u03BB",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      laquo: "\xAB",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      lcaron: "\u013E",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      le: "\u2264",
      leftarrow: "\u2190",
      leftarrowtail: "\u21A2",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      leftthreetimes: "\u22CB",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      lessgtr: "\u2276",
      lesssim: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      ljcy: "\u0459",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      llhard: "\u296B",
      lltri: "\u25FA",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnE: "\u2268",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      longleftarrow: "\u27F5",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      lscr: "\u{1D4C1}",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      lstrok: "\u0142",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltrPar: "\u2996",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      mDDot: "\u223A",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      mcy: "\u043C",
      mdash: "\u2014",
      measuredangle: "\u2221",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xB5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middot: "\xB7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nGg: "\u22D9\u0338",
      nGt: "\u226B\u20D2",
      nGtv: "\u226B\u0338",
      nLeftarrow: "\u21CD",
      nLeftrightarrow: "\u21CE",
      nLl: "\u22D8\u0338",
      nLt: "\u226A\u20D2",
      nLtv: "\u226A\u0338",
      nRightarrow: "\u21CF",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nabla: "\u2207",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      ncaron: "\u0148",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      neArr: "\u21D7",
      nearhk: "\u2924",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      nexist: "\u2204",
      nexists: "\u2204",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      ngsim: "\u2275",
      ngt: "\u226F",
      ngtr: "\u226F",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlE: "\u2266\u0338",
      nlarr: "\u219A",
      nldr: "\u2025",
      nle: "\u2270",
      nleftarrow: "\u219A",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nlsim: "\u2274",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nmid: "\u2224",
      nopf: "\u{1D55F}",
      not: "\xAC",
      notin: "\u2209",
      notinE: "\u22F9\u0338",
      notindot: "\u22F5\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvDash: "\u22AD",
      nvHarr: "\u2904",
      nvap: "\u224D\u20D2",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwArr: "\u21D6",
      nwarhk: "\u2923",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      oS: "\u24C8",
      oacute: "\xF3",
      oast: "\u229B",
      ocir: "\u229A",
      ocirc: "\xF4",
      ocy: "\u043E",
      odash: "\u229D",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      oelig: "\u0153",
      ofcir: "\u29BF",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      omacr: "\u014D",
      omega: "\u03C9",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      operp: "\u29B9",
      oplus: "\u2295",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oscr: "\u2134",
      oslash: "\xF8",
      osol: "\u2298",
      otilde: "\xF5",
      otimes: "\u2297",
      otimesas: "\u2A36",
      ouml: "\xF6",
      ovbar: "\u233D",
      par: "\u2225",
      para: "\xB6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      pfr: "\u{1D52D}",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      pointint: "\u2A15",
      popf: "\u{1D561}",
      pound: "\xA3",
      pr: "\u227A",
      prE: "\u2AB3",
      prap: "\u2AB7",
      prcue: "\u227C",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      prime: "\u2032",
      primes: "\u2119",
      prnE: "\u2AB5",
      prnap: "\u2AB9",
      prnsim: "\u22E8",
      prod: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      pscr: "\u{1D4C5}",
      psi: "\u03C8",
      puncsp: "\u2008",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      quot: '"',
      rAarr: "\u21DB",
      rArr: "\u21D2",
      rAtail: "\u291C",
      rBarr: "\u290F",
      rHar: "\u2964",
      race: "\u223D\u0331",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xBB",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      rcaron: "\u0159",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      reg: "\xAE",
      rfisht: "\u297D",
      rfloor: "\u230B",
      rfr: "\u{1D52F}",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      rho: "\u03C1",
      rhov: "\u03F1",
      rightarrow: "\u2192",
      rightarrowtail: "\u21A3",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      rightthreetimes: "\u22CC",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      rsaquo: "\u203A",
      rscr: "\u{1D4C7}",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      ruluhar: "\u2968",
      rx: "\u211E",
      sacute: "\u015B",
      sbquo: "\u201A",
      sc: "\u227B",
      scE: "\u2AB4",
      scap: "\u2AB8",
      scaron: "\u0161",
      sccue: "\u227D",
      sce: "\u2AB0",
      scedil: "\u015F",
      scirc: "\u015D",
      scnE: "\u2AB6",
      scnap: "\u2ABA",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      seArr: "\u21D8",
      searhk: "\u2925",
      searr: "\u2198",
      searrow: "\u2198",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      shchcy: "\u0449",
      shcy: "\u0448",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      shy: "\xAD",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      square: "\u25A1",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      sub: "\u2282",
      subE: "\u2AC5",
      subdot: "\u2ABD",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      sum: "\u2211",
      sung: "\u266A",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      sup: "\u2283",
      supE: "\u2AC6",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supe: "\u2287",
      supedot: "\u2AC4",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swArr: "\u21D9",
      swarhk: "\u2926",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xDF",
      target: "\u2316",
      tau: "\u03C4",
      tbrk: "\u23B4",
      tcaron: "\u0165",
      tcedil: "\u0163",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      tfr: "\u{1D531}",
      there4: "\u2234",
      therefore: "\u2234",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      thinsp: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      thorn: "\xFE",
      tilde: "\u02DC",
      times: "\xD7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      tscr: "\u{1D4C9}",
      tscy: "\u0446",
      tshcy: "\u045B",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      uArr: "\u21D1",
      uHar: "\u2963",
      uacute: "\xFA",
      uarr: "\u2191",
      ubrcy: "\u045E",
      ubreve: "\u016D",
      ucirc: "\xFB",
      ucy: "\u0443",
      udarr: "\u21C5",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      ufr: "\u{1D532}",
      ugrave: "\xF9",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      umacr: "\u016B",
      uml: "\xA8",
      uogon: "\u0173",
      uopf: "\u{1D566}",
      uparrow: "\u2191",
      updownarrow: "\u2195",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      upsi: "\u03C5",
      upsih: "\u03D2",
      upsilon: "\u03C5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      uring: "\u016F",
      urtri: "\u25F9",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vArr: "\u21D5",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      vDash: "\u22A8",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      vcy: "\u0432",
      vdash: "\u22A2",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      verbar: "|",
      vert: "|",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      vzigzag: "\u299A",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      wfr: "\u{1D534}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      yacute: "\xFD",
      yacy: "\u044F",
      ycirc: "\u0177",
      ycy: "\u044B",
      yen: "\xA5",
      yfr: "\u{1D536}",
      yicy: "\u0457",
      yopf: "\u{1D56A}",
      yscr: "\u{1D4CE}",
      yucy: "\u044E",
      yuml: "\xFF",
      zacute: "\u017A",
      zcaron: "\u017E",
      zcy: "\u0437",
      zdot: "\u017C",
      zeetrf: "\u2128",
      zeta: "\u03B6",
      zfr: "\u{1D537}",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      zopf: "\u{1D56B}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    };
  }
});

// node_modules/decode-named-character-reference/index.js
function decodeNamedCharacterReference(value) {
  return own.call(characterEntities, value) ? characterEntities[value] : false;
}
var own;
var init_decode_named_character_reference = __esm({
  "node_modules/decode-named-character-reference/index.js"() {
    init_character_entities();
    own = {}.hasOwnProperty;
  }
});

// node_modules/micromark-util-chunked/index.js
function splice(list5, start, remove, items) {
  const end = list5.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    list5.splice(...parameters);
  } else {
    if (remove) list5.splice(start, remove);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      list5.splice(...parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push2(list5, items) {
  if (list5.length > 0) {
    splice(list5, list5.length, 0, items);
    return list5;
  }
  return items;
}
var init_micromark_util_chunked = __esm({
  "node_modules/micromark-util-chunked/index.js"() {
  }
});

// node_modules/micromark-util-combine-extensions/index.js
function combineExtensions(extensions) {
  const all3 = {};
  let index11 = -1;
  while (++index11 < extensions.length) {
    syntaxExtension(all3, extensions[index11]);
  }
  return all3;
}
function syntaxExtension(all3, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty.call(all3, hook) ? all3[hook] : void 0;
    const left = maybe || (all3[hook] = {});
    const right = extension2[hook];
    let code3;
    if (right) {
      for (code3 in right) {
        if (!hasOwnProperty.call(left, code3)) left[code3] = [];
        const value = right[code3];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code3],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}
function constructs(existing, list5) {
  let index11 = -1;
  const before = [];
  while (++index11 < list5.length) {
    ;
    (list5[index11].add === "after" ? existing : before).push(list5[index11]);
  }
  splice(existing, 0, 0, before);
}
var hasOwnProperty;
var init_micromark_util_combine_extensions = __esm({
  "node_modules/micromark-util-combine-extensions/index.js"() {
    init_micromark_util_chunked();
    hasOwnProperty = {}.hasOwnProperty;
  }
});

// node_modules/micromark-util-decode-numeric-character-reference/index.js
function decodeNumericCharacterReference(value, base2) {
  const code3 = Number.parseInt(value, base2);
  if (
    // C0 except for HT, LF, FF, CR, space.
    code3 < 9 || code3 === 11 || code3 > 13 && code3 < 32 || // Control character (DEL) of C0, and C1 controls.
    code3 > 126 && code3 < 160 || // Lone high surrogates and low surrogates.
    code3 > 55295 && code3 < 57344 || // Noncharacters.
    code3 > 64975 && code3 < 65008 || /* eslint-disable no-bitwise */
    (code3 & 65535) === 65535 || (code3 & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    code3 > 1114111
  ) {
    return "\uFFFD";
  }
  return String.fromCodePoint(code3);
}
var init_micromark_util_decode_numeric_character_reference = __esm({
  "node_modules/micromark-util-decode-numeric-character-reference/index.js"() {
  }
});

// node_modules/micromark-util-normalize-identifier/index.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var init_micromark_util_normalize_identifier = __esm({
  "node_modules/micromark-util-normalize-identifier/index.js"() {
  }
});

// node_modules/micromark-util-character/index.js
function asciiControl(code3) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code3 !== null && (code3 < 32 || code3 === 127)
  );
}
function markdownLineEnding(code3) {
  return code3 !== null && code3 < -2;
}
function markdownLineEndingOrSpace(code3) {
  return code3 !== null && (code3 < 0 || code3 === 32);
}
function markdownSpace(code3) {
  return code3 === -2 || code3 === -1 || code3 === 32;
}
function regexCheck(regex) {
  return check;
  function check(code3) {
    return code3 !== null && code3 > -1 && regex.test(String.fromCharCode(code3));
  }
}
var asciiAlpha, asciiAlphanumeric, asciiAtext, asciiDigit, asciiHexDigit, asciiPunctuation, unicodePunctuation, unicodeWhitespace;
var init_micromark_util_character = __esm({
  "node_modules/micromark-util-character/index.js"() {
    asciiAlpha = regexCheck(/[A-Za-z]/);
    asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
    asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
    asciiDigit = regexCheck(/\d/);
    asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
    asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
    unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
    unicodeWhitespace = regexCheck(/\s/);
  }
});

// node_modules/micromark-util-sanitize-uri/index.js
function normalizeUri(value) {
  const result = [];
  let index11 = -1;
  let start = 0;
  let skip = 0;
  while (++index11 < value.length) {
    const code3 = value.charCodeAt(index11);
    let replace = "";
    if (code3 === 37 && asciiAlphanumeric(value.charCodeAt(index11 + 1)) && asciiAlphanumeric(value.charCodeAt(index11 + 2))) {
      skip = 2;
    } else if (code3 < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code3))) {
        replace = String.fromCharCode(code3);
      }
    } else if (code3 > 55295 && code3 < 57344) {
      const next = value.charCodeAt(index11 + 1);
      if (code3 < 56320 && next > 56319 && next < 57344) {
        replace = String.fromCharCode(code3, next);
        skip = 1;
      } else {
        replace = "\uFFFD";
      }
    } else {
      replace = String.fromCharCode(code3);
    }
    if (replace) {
      result.push(value.slice(start, index11), encodeURIComponent(replace));
      start = index11 + skip + 1;
      replace = "";
    }
    if (skip) {
      index11 += skip;
      skip = 0;
    }
  }
  return result.join("") + value.slice(start);
}
var init_micromark_util_sanitize_uri = __esm({
  "node_modules/micromark-util-sanitize-uri/index.js"() {
    init_micromark_util_character();
  }
});

// node_modules/micromark-factory-space/index.js
function factorySpace(effects, ok3, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code3) {
    if (markdownSpace(code3)) {
      effects.enter(type);
      return prefix(code3);
    }
    return ok3(code3);
  }
  function prefix(code3) {
    if (markdownSpace(code3) && size++ < limit) {
      effects.consume(code3);
      return prefix;
    }
    effects.exit(type);
    return ok3(code3);
  }
}
var init_micromark_factory_space = __esm({
  "node_modules/micromark-factory-space/index.js"() {
    init_micromark_util_character();
  }
});

// node_modules/micromark/lib/initialize/content.js
function initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  let previous2;
  return contentStart;
  function afterContentStartConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code3) {
    effects.enter("paragraph");
    return lineStart(code3);
  }
  function lineStart(code3) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous2
    });
    if (previous2) {
      previous2.next = token;
    }
    previous2 = token;
    return data(code3);
  }
  function data(code3) {
    if (code3 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code3);
      return;
    }
    if (markdownLineEnding(code3)) {
      effects.consume(code3);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code3);
    return data;
  }
}
var content;
var init_content = __esm({
  "node_modules/micromark/lib/initialize/content.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    content = {
      tokenize: initializeContent
    };
  }
});

// node_modules/micromark/lib/initialize/document.js
function initializeDocument(effects) {
  const self2 = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code3) {
    if (continued < stack.length) {
      const item = stack[continued];
      self2.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code3);
    }
    return checkNewContainers(code3);
  }
  function documentContinue(code3) {
    continued++;
    if (self2.containerState._closeFlow) {
      self2.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point4;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          point4 = self2.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index11 = indexBeforeExits;
      while (index11 < self2.events.length) {
        self2.events[index11][1].end = {
          ...point4
        };
        index11++;
      }
      splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits));
      self2.events.length = index11;
      return checkNewContainers(code3);
    }
    return start(code3);
  }
  function checkNewContainers(code3) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code3);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code3);
      }
      self2.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    self2.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code3);
  }
  function thereIsANewContainer(code3) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code3);
  }
  function thereIsNoNewContainer(code3) {
    self2.parser.lazy[self2.now().line] = continued !== stack.length;
    lineStartOffset = self2.now().offset;
    return flowStart(code3);
  }
  function documentContinued(code3) {
    self2.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code3);
  }
  function containerContinue(code3) {
    continued++;
    stack.push([self2.currentConstruct, self2.containerState]);
    return documentContinued(code3);
  }
  function flowStart(code3) {
    if (code3 === null) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code3);
      return;
    }
    childFlow = childFlow || self2.parser.flow(self2.now());
    effects.enter("chunkFlow", {
      _tokenizer: childFlow,
      contentType: "flow",
      previous: childToken
    });
    return flowContinue(code3);
  }
  function flowContinue(code3) {
    if (code3 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code3);
      return;
    }
    if (markdownLineEnding(code3)) {
      effects.consume(code3);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self2.interrupt = void 0;
      return start;
    }
    effects.consume(code3);
    return flowContinue;
  }
  function writeToChild(token, endOfFile) {
    const stream = self2.sliceStream(token);
    if (endOfFile) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self2.parser.lazy[token.start.line]) {
      let index11 = childFlow.events.length;
      while (index11--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index11][1].start.offset < lineStartOffset && // …and either is not ended yet…
          (!childFlow.events[index11][1].end || // …or ends after it.
          childFlow.events[index11][1].end.offset > lineStartOffset)
        ) {
          return;
        }
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point4;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point4 = self2.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index11 = indexBeforeExits;
      while (index11 < self2.events.length) {
        self2.events[index11][1].end = {
          ...point4
        };
        index11++;
      }
      splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits));
      self2.events.length = index11;
    }
  }
  function exitContainers(size) {
    let index11 = stack.length;
    while (index11-- > size) {
      const entry = stack[index11];
      self2.containerState = entry[1];
      entry[0].exit.call(self2, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self2.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok3, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok3, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
var document2, containerConstruct;
var init_document = __esm({
  "node_modules/micromark/lib/initialize/document.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    init_micromark_util_chunked();
    document2 = {
      tokenize: initializeDocument
    };
    containerConstruct = {
      tokenize: tokenizeContainer
    };
  }
});

// node_modules/micromark-util-classify-character/index.js
function classifyCharacter(code3) {
  if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
    return 1;
  }
  if (unicodePunctuation(code3)) {
    return 2;
  }
}
var init_micromark_util_classify_character = __esm({
  "node_modules/micromark-util-classify-character/index.js"() {
    init_micromark_util_character();
  }
});

// node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs2, events, context2) {
  const called = [];
  let index11 = -1;
  while (++index11 < constructs2.length) {
    const resolve2 = constructs2[index11].resolveAll;
    if (resolve2 && !called.includes(resolve2)) {
      events = resolve2(events, context2);
      called.push(resolve2);
    }
  }
  return events;
}
var init_micromark_util_resolve_all = __esm({
  "node_modules/micromark-util-resolve-all/index.js"() {
  }
});

// node_modules/micromark-core-commonmark/lib/attention.js
function resolveAllAttention(events, context2) {
  let index11 = -1;
  let open;
  let group;
  let text8;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index11 < events.length) {
    if (events[index11][0] === "enter" && events[index11][1].type === "attentionSequence" && events[index11][1]._close) {
      open = index11;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
        context2.sliceSerialize(events[open][1]).charCodeAt(0) === context2.sliceSerialize(events[index11][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index11][1]._open) && (events[index11][1].end.offset - events[index11][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index11][1].end.offset - events[index11][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index11][1].end.offset - events[index11][1].start.offset > 1 ? 2 : 1;
          const start = {
            ...events[open][1].end
          };
          const end = {
            ...events[index11][1].start
          };
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: {
              ...events[open][1].end
            }
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...events[index11][1].start
            },
            end
          };
          text8 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: {
              ...events[open][1].end
            },
            end: {
              ...events[index11][1].start
            }
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: {
              ...openingSequence.start
            },
            end: {
              ...closingSequence.end
            }
          };
          events[open][1].end = {
            ...openingSequence.start
          };
          events[index11][1].start = {
            ...closingSequence.end
          };
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push2(nextEvents, [["enter", events[open][1], context2], ["exit", events[open][1], context2]]);
          }
          nextEvents = push2(nextEvents, [["enter", group, context2], ["enter", openingSequence, context2], ["exit", openingSequence, context2], ["enter", text8, context2]]);
          nextEvents = push2(nextEvents, resolveAll(context2.parser.constructs.insideSpan.null, events.slice(open + 1, index11), context2));
          nextEvents = push2(nextEvents, [["exit", text8, context2], ["enter", closingSequence, context2], ["exit", closingSequence, context2], ["exit", group, context2]]);
          if (events[index11][1].end.offset - events[index11][1].start.offset) {
            offset = 2;
            nextEvents = push2(nextEvents, [["enter", events[index11][1], context2], ["exit", events[index11][1], context2]]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index11 - open + 3, nextEvents);
          index11 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index11 = -1;
  while (++index11 < events.length) {
    if (events[index11][1].type === "attentionSequence") {
      events[index11][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok3) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous2 = this.previous;
  const before = classifyCharacter(previous2);
  let marker;
  return start;
  function start(code3) {
    marker = code3;
    effects.enter("attentionSequence");
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return inside;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter(code3);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code3);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous2);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok3(code3);
  }
}
function movePoint(point4, offset) {
  point4.column += offset;
  point4.offset += offset;
  point4._bufferIndex += offset;
}
var attention;
var init_attention = __esm({
  "node_modules/micromark-core-commonmark/lib/attention.js"() {
    init_micromark_util_chunked();
    init_micromark_util_classify_character();
    init_micromark_util_resolve_all();
    attention = {
      name: "attention",
      resolveAll: resolveAllAttention,
      tokenize: tokenizeAttention
    };
  }
});

// node_modules/micromark-core-commonmark/lib/autolink.js
function tokenizeAutolink(effects, ok3, nok) {
  let size = 0;
  return start;
  function start(code3) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code3);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return schemeOrEmailAtext;
    }
    if (code3 === 64) {
      return nok(code3);
    }
    return emailAtext(code3);
  }
  function schemeOrEmailAtext(code3) {
    if (code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) {
      size = 1;
      return schemeInsideOrEmailAtext(code3);
    }
    return emailAtext(code3);
  }
  function schemeInsideOrEmailAtext(code3) {
    if (code3 === 58) {
      effects.consume(code3);
      size = 0;
      return urlInside;
    }
    if ((code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) && size++ < 32) {
      effects.consume(code3);
      return schemeInsideOrEmailAtext;
    }
    size = 0;
    return emailAtext(code3);
  }
  function urlInside(code3) {
    if (code3 === 62) {
      effects.exit("autolinkProtocol");
      effects.enter("autolinkMarker");
      effects.consume(code3);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok3;
    }
    if (code3 === null || code3 === 32 || code3 === 60 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return urlInside;
  }
  function emailAtext(code3) {
    if (code3 === 64) {
      effects.consume(code3);
      return emailAtSignOrDot;
    }
    if (asciiAtext(code3)) {
      effects.consume(code3);
      return emailAtext;
    }
    return nok(code3);
  }
  function emailAtSignOrDot(code3) {
    return asciiAlphanumeric(code3) ? emailLabel(code3) : nok(code3);
  }
  function emailLabel(code3) {
    if (code3 === 46) {
      effects.consume(code3);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code3 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      effects.enter("autolinkMarker");
      effects.consume(code3);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok3;
    }
    return emailValue(code3);
  }
  function emailValue(code3) {
    if ((code3 === 45 || asciiAlphanumeric(code3)) && size++ < 63) {
      const next = code3 === 45 ? emailValue : emailLabel;
      effects.consume(code3);
      return next;
    }
    return nok(code3);
  }
}
var autolink;
var init_autolink = __esm({
  "node_modules/micromark-core-commonmark/lib/autolink.js"() {
    init_micromark_util_character();
    autolink = {
      name: "autolink",
      tokenize: tokenizeAutolink
    };
  }
});

// node_modules/micromark-core-commonmark/lib/blank-line.js
function tokenizeBlankLine(effects, ok3, nok) {
  return start;
  function start(code3) {
    return markdownSpace(code3) ? factorySpace(effects, after, "linePrefix")(code3) : after(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3);
  }
}
var blankLine;
var init_blank_line = __esm({
  "node_modules/micromark-core-commonmark/lib/blank-line.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    blankLine = {
      partial: true,
      tokenize: tokenizeBlankLine
    };
  }
});

// node_modules/micromark-core-commonmark/lib/block-quote.js
function tokenizeBlockQuoteStart(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    if (code3 === 62) {
      const state2 = self2.containerState;
      if (!state2.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state2.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code3);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    if (markdownSpace(code3)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code3);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok3;
    }
    effects.exit("blockQuotePrefix");
    return ok3(code3);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok3, nok) {
  const self2 = this;
  return contStart;
  function contStart(code3) {
    if (markdownSpace(code3)) {
      return factorySpace(effects, contBefore, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
    }
    return contBefore(code3);
  }
  function contBefore(code3) {
    return effects.attempt(blockQuote, ok3, nok)(code3);
  }
}
function exit(effects) {
  effects.exit("blockQuote");
}
var blockQuote;
var init_block_quote = __esm({
  "node_modules/micromark-core-commonmark/lib/block-quote.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    blockQuote = {
      continuation: {
        tokenize: tokenizeBlockQuoteContinuation
      },
      exit,
      name: "blockQuote",
      tokenize: tokenizeBlockQuoteStart
    };
  }
});

// node_modules/micromark-core-commonmark/lib/character-escape.js
function tokenizeCharacterEscape(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code3);
    effects.exit("escapeMarker");
    return inside;
  }
  function inside(code3) {
    if (asciiPunctuation(code3)) {
      effects.enter("characterEscapeValue");
      effects.consume(code3);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok3;
    }
    return nok(code3);
  }
}
var characterEscape;
var init_character_escape = __esm({
  "node_modules/micromark-core-commonmark/lib/character-escape.js"() {
    init_micromark_util_character();
    characterEscape = {
      name: "characterEscape",
      tokenize: tokenizeCharacterEscape
    };
  }
});

// node_modules/micromark-core-commonmark/lib/character-reference.js
function tokenizeCharacterReference(effects, ok3, nok) {
  const self2 = this;
  let size = 0;
  let max;
  let test;
  return start;
  function start(code3) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code3);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code3);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric;
    return value(code3);
  }
  function numeric(code3) {
    if (code3 === 88 || code3 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code3);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit;
    return value(code3);
  }
  function value(code3) {
    if (code3 === 59 && size) {
      const token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self2.sliceSerialize(token))) {
        return nok(code3);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code3);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok3;
    }
    if (test(code3) && size++ < max) {
      effects.consume(code3);
      return value;
    }
    return nok(code3);
  }
}
var characterReference;
var init_character_reference = __esm({
  "node_modules/micromark-core-commonmark/lib/character-reference.js"() {
    init_decode_named_character_reference();
    init_micromark_util_character();
    characterReference = {
      name: "characterReference",
      tokenize: tokenizeCharacterReference
    };
  }
});

// node_modules/micromark-core-commonmark/lib/code-fenced.js
function tokenizeCodeFenced(effects, ok3, nok) {
  const self2 = this;
  const closeStart = {
    partial: true,
    tokenize: tokenizeCloseStart
  };
  let initialPrefix = 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code3) {
    return beforeSequenceOpen(code3);
  }
  function beforeSequenceOpen(code3) {
    const tail = self2.events[self2.events.length - 1];
    initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    marker = code3;
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === marker) {
      sizeOpen++;
      effects.consume(code3);
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code3);
    }
    effects.exit("codeFencedFenceSequence");
    return markdownSpace(code3) ? factorySpace(effects, infoBefore, "whitespace")(code3) : infoBefore(code3);
  }
  function infoBefore(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFencedFence");
      return self2.interrupt ? ok3(code3) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code3);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code3);
  }
  function info(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return infoBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, metaBefore, "whitespace")(code3);
    }
    if (code3 === 96 && code3 === marker) {
      return nok(code3);
    }
    effects.consume(code3);
    return info;
  }
  function metaBefore(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return infoBefore(code3);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code3);
  }
  function meta(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return infoBefore(code3);
    }
    if (code3 === 96 && code3 === marker) {
      return nok(code3);
    }
    effects.consume(code3);
    return meta;
  }
  function atNonLazyBreak(code3) {
    return effects.attempt(closeStart, after, contentBefore)(code3);
  }
  function contentBefore(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return contentStart;
  }
  function contentStart(code3) {
    return initialPrefix > 0 && markdownSpace(code3) ? factorySpace(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code3) : beforeContentChunk(code3);
  }
  function beforeContentChunk(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code3);
    }
    effects.enter("codeFlowValue");
    return contentChunk(code3);
  }
  function contentChunk(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFlowValue");
      return beforeContentChunk(code3);
    }
    effects.consume(code3);
    return contentChunk;
  }
  function after(code3) {
    effects.exit("codeFenced");
    return ok3(code3);
  }
  function tokenizeCloseStart(effects2, ok4, nok2) {
    let size = 0;
    return startBefore;
    function startBefore(code3) {
      effects2.enter("lineEnding");
      effects2.consume(code3);
      effects2.exit("lineEnding");
      return start2;
    }
    function start2(code3) {
      effects2.enter("codeFencedFence");
      return markdownSpace(code3) ? factorySpace(effects2, beforeSequenceClose, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3) : beforeSequenceClose(code3);
    }
    function beforeSequenceClose(code3) {
      if (code3 === marker) {
        effects2.enter("codeFencedFenceSequence");
        return sequenceClose(code3);
      }
      return nok2(code3);
    }
    function sequenceClose(code3) {
      if (code3 === marker) {
        size++;
        effects2.consume(code3);
        return sequenceClose;
      }
      if (size >= sizeOpen) {
        effects2.exit("codeFencedFenceSequence");
        return markdownSpace(code3) ? factorySpace(effects2, sequenceCloseAfter, "whitespace")(code3) : sequenceCloseAfter(code3);
      }
      return nok2(code3);
    }
    function sequenceCloseAfter(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects2.exit("codeFencedFence");
        return ok4(code3);
      }
      return nok2(code3);
    }
  }
}
function tokenizeNonLazyContinuation(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code3) {
    return self2.parser.lazy[self2.now().line] ? nok(code3) : ok3(code3);
  }
}
var nonLazyContinuation, codeFenced;
var init_code_fenced = __esm({
  "node_modules/micromark-core-commonmark/lib/code-fenced.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    nonLazyContinuation = {
      partial: true,
      tokenize: tokenizeNonLazyContinuation
    };
    codeFenced = {
      concrete: true,
      name: "codeFenced",
      tokenize: tokenizeCodeFenced
    };
  }
});

// node_modules/micromark-core-commonmark/lib/code-indented.js
function tokenizeCodeIndented(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterPrefix(code3) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code3) : nok(code3);
  }
  function atBreak(code3) {
    if (code3 === null) {
      return after(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.attempt(furtherStart, atBreak, after)(code3);
    }
    effects.enter("codeFlowValue");
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFlowValue");
      return atBreak(code3);
    }
    effects.consume(code3);
    return inside;
  }
  function after(code3) {
    effects.exit("codeIndented");
    return ok3(code3);
  }
}
function tokenizeFurtherStart(effects, ok3, nok) {
  const self2 = this;
  return furtherStart2;
  function furtherStart2(code3) {
    if (self2.parser.lazy[self2.now().line]) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return furtherStart2;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterPrefix(code3) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok3(code3) : markdownLineEnding(code3) ? furtherStart2(code3) : nok(code3);
  }
}
var codeIndented, furtherStart;
var init_code_indented = __esm({
  "node_modules/micromark-core-commonmark/lib/code-indented.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    codeIndented = {
      name: "codeIndented",
      tokenize: tokenizeCodeIndented
    };
    furtherStart = {
      partial: true,
      tokenize: tokenizeFurtherStart
    };
  }
});

// node_modules/micromark-core-commonmark/lib/code-text.js
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index11;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index11 = headEnterIndex;
    while (++index11 < tailExitIndex) {
      if (events[index11][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index11 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index11 <= tailExitIndex) {
    if (enter === void 0) {
      if (index11 !== tailExitIndex && events[index11][1].type !== "lineEnding") {
        enter = index11;
      }
    } else if (index11 === tailExitIndex || events[index11][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index11 !== enter + 2) {
        events[enter][1].end = events[index11 - 1][1].end;
        events.splice(enter + 2, index11 - enter - 2);
        tailExitIndex -= index11 - enter - 2;
        index11 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code3) {
  return code3 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok3, nok) {
  const self2 = this;
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code3) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === 96) {
      effects.consume(code3);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeTextSequence");
    return between2(code3);
  }
  function between2(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 32) {
      effects.enter("space");
      effects.consume(code3);
      effects.exit("space");
      return between2;
    }
    if (code3 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return sequenceClose(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return between2;
    }
    effects.enter("codeTextData");
    return data(code3);
  }
  function data(code3) {
    if (code3 === null || code3 === 32 || code3 === 96 || markdownLineEnding(code3)) {
      effects.exit("codeTextData");
      return between2(code3);
    }
    effects.consume(code3);
    return data;
  }
  function sequenceClose(code3) {
    if (code3 === 96) {
      effects.consume(code3);
      size++;
      return sequenceClose;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok3(code3);
    }
    token.type = "codeTextData";
    return data(code3);
  }
}
var codeText;
var init_code_text = __esm({
  "node_modules/micromark-core-commonmark/lib/code-text.js"() {
    init_micromark_util_character();
    codeText = {
      name: "codeText",
      previous,
      resolve: resolveCodeText,
      tokenize: tokenizeCodeText
    };
  }
});

// node_modules/micromark-util-subtokenize/lib/splice-buffer.js
function chunkedPush(list5, right) {
  let chunkStart = 0;
  if (right.length < 1e4) {
    list5.push(...right);
  } else {
    while (chunkStart < right.length) {
      list5.push(...right.slice(chunkStart, chunkStart + 1e4));
      chunkStart += 1e4;
    }
  }
}
var SpliceBuffer;
var init_splice_buffer = __esm({
  "node_modules/micromark-util-subtokenize/lib/splice-buffer.js"() {
    SpliceBuffer = class {
      /**
       * @param {ReadonlyArray<T> | null | undefined} [initial]
       *   Initial items (optional).
       * @returns
       *   Splice buffer.
       */
      constructor(initial2) {
        this.left = initial2 ? [...initial2] : [];
        this.right = [];
      }
      /**
       * Array access;
       * does not move the cursor.
       *
       * @param {number} index
       *   Index.
       * @return {T}
       *   Item.
       */
      get(index11) {
        if (index11 < 0 || index11 >= this.left.length + this.right.length) {
          throw new RangeError("Cannot access index `" + index11 + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
        }
        if (index11 < this.left.length) return this.left[index11];
        return this.right[this.right.length - index11 + this.left.length - 1];
      }
      /**
       * The length of the splice buffer, one greater than the largest index in the
       * array.
       */
      get length() {
        return this.left.length + this.right.length;
      }
      /**
       * Remove and return `list[0]`;
       * moves the cursor to `0`.
       *
       * @returns {T | undefined}
       *   Item, optional.
       */
      shift() {
        this.setCursor(0);
        return this.right.pop();
      }
      /**
       * Slice the buffer to get an array;
       * does not move the cursor.
       *
       * @param {number} start
       *   Start.
       * @param {number | null | undefined} [end]
       *   End (optional).
       * @returns {Array<T>}
       *   Array of items.
       */
      slice(start, end) {
        const stop = end === null || end === void 0 ? Number.POSITIVE_INFINITY : end;
        if (stop < this.left.length) {
          return this.left.slice(start, stop);
        }
        if (start > this.left.length) {
          return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
        }
        return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
      }
      /**
       * Mimics the behavior of Array.prototype.splice() except for the change of
       * interface necessary to avoid segfaults when patching in very large arrays.
       *
       * This operation moves cursor is moved to `start` and results in the cursor
       * placed after any inserted items.
       *
       * @param {number} start
       *   Start;
       *   zero-based index at which to start changing the array;
       *   negative numbers count backwards from the end of the array and values
       *   that are out-of bounds are clamped to the appropriate end of the array.
       * @param {number | null | undefined} [deleteCount=0]
       *   Delete count (default: `0`);
       *   maximum number of elements to delete, starting from start.
       * @param {Array<T> | null | undefined} [items=[]]
       *   Items to include in place of the deleted items (default: `[]`).
       * @return {Array<T>}
       *   Any removed items.
       */
      splice(start, deleteCount, items) {
        const count = deleteCount || 0;
        this.setCursor(Math.trunc(start));
        const removed = this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
        if (items) chunkedPush(this.left, items);
        return removed.reverse();
      }
      /**
       * Remove and return the highest-numbered item in the array, so
       * `list[list.length - 1]`;
       * Moves the cursor to `length`.
       *
       * @returns {T | undefined}
       *   Item, optional.
       */
      pop() {
        this.setCursor(Number.POSITIVE_INFINITY);
        return this.left.pop();
      }
      /**
       * Inserts a single item to the high-numbered side of the array;
       * moves the cursor to `length`.
       *
       * @param {T} item
       *   Item.
       * @returns {undefined}
       *   Nothing.
       */
      push(item) {
        this.setCursor(Number.POSITIVE_INFINITY);
        this.left.push(item);
      }
      /**
       * Inserts many items to the high-numbered side of the array.
       * Moves the cursor to `length`.
       *
       * @param {Array<T>} items
       *   Items.
       * @returns {undefined}
       *   Nothing.
       */
      pushMany(items) {
        this.setCursor(Number.POSITIVE_INFINITY);
        chunkedPush(this.left, items);
      }
      /**
       * Inserts a single item to the low-numbered side of the array;
       * Moves the cursor to `0`.
       *
       * @param {T} item
       *   Item.
       * @returns {undefined}
       *   Nothing.
       */
      unshift(item) {
        this.setCursor(0);
        this.right.push(item);
      }
      /**
       * Inserts many items to the low-numbered side of the array;
       * moves the cursor to `0`.
       *
       * @param {Array<T>} items
       *   Items.
       * @returns {undefined}
       *   Nothing.
       */
      unshiftMany(items) {
        this.setCursor(0);
        chunkedPush(this.right, items.reverse());
      }
      /**
       * Move the cursor to a specific position in the array. Requires
       * time proportional to the distance moved.
       *
       * If `n < 0`, the cursor will end up at the beginning.
       * If `n > length`, the cursor will end up at the end.
       *
       * @param {number} n
       *   Position.
       * @return {undefined}
       *   Nothing.
       */
      setCursor(n2) {
        if (n2 === this.left.length || n2 > this.left.length && this.right.length === 0 || n2 < 0 && this.left.length === 0) return;
        if (n2 < this.left.length) {
          const removed = this.left.splice(n2, Number.POSITIVE_INFINITY);
          chunkedPush(this.right, removed.reverse());
        } else {
          const removed = this.right.splice(this.left.length + this.right.length - n2, Number.POSITIVE_INFINITY);
          chunkedPush(this.left, removed.reverse());
        }
      }
    };
  }
});

// node_modules/micromark-util-subtokenize/index.js
function subtokenize(eventsArray) {
  const jumps = {};
  let index11 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  const events = new SpliceBuffer(eventsArray);
  while (++index11 < events.length) {
    while (index11 in jumps) {
      index11 = jumps[index11];
    }
    event = events.get(index11);
    if (index11 && event[1].type === "chunkFlow" && events.get(index11 - 1)[1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index11));
        index11 = jumps[index11];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index11;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events.get(otherIndex);
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events.get(lineIndex)[1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else if (otherEvent[1].type === "linePrefix" || otherEvent[1].type === "listItemIndent") {
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = {
          ...events.get(lineIndex)[1].start
        };
        parameters = events.slice(lineIndex, index11);
        parameters.unshift(event);
        events.splice(lineIndex, index11 - lineIndex + 1, parameters);
      }
    }
  }
  splice(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events.get(eventIndex)[1];
  const context2 = events.get(eventIndex)[2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  let tokenizer = token._tokenizer;
  if (!tokenizer) {
    tokenizer = context2.parser[token.contentType](token.start);
    if (token._contentTypeTextTrailing) {
      tokenizer._contentTypeTextTrailing = true;
    }
  }
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous2;
  let index11 = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events.get(++startPosition)[1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context2.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous2) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous2 = current;
    current = current.next;
  }
  current = token;
  while (++index11 < childEvents.length) {
    if (
      // Find a void token that includes a break.
      childEvents[index11][0] === "exit" && childEvents[index11 - 1][0] === "enter" && childEvents[index11][1].type === childEvents[index11 - 1][1].type && childEvents[index11][1].start.line !== childEvents[index11][1].end.line
    ) {
      start = index11 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index11 = breaks.length;
  while (index11--) {
    const slice = childEvents.slice(breaks[index11], breaks[index11 + 1]);
    const start2 = startPositions.pop();
    jumps.push([start2, start2 + slice.length - 1]);
    events.splice(start2, 2, slice);
  }
  jumps.reverse();
  index11 = -1;
  while (++index11 < jumps.length) {
    gaps[adjust + jumps[index11][0]] = adjust + jumps[index11][1];
    adjust += jumps[index11][1] - jumps[index11][0] - 1;
  }
  return gaps;
}
var init_micromark_util_subtokenize = __esm({
  "node_modules/micromark-util-subtokenize/index.js"() {
    init_micromark_util_chunked();
    init_splice_buffer();
  }
});

// node_modules/micromark-core-commonmark/lib/content.js
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok3) {
  let previous2;
  return chunkStart;
  function chunkStart(code3) {
    effects.enter("content");
    previous2 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return chunkInside(code3);
  }
  function chunkInside(code3) {
    if (code3 === null) {
      return contentEnd(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code3);
    }
    effects.consume(code3);
    return chunkInside;
  }
  function contentEnd(code3) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok3(code3);
  }
  function contentContinue(code3) {
    effects.consume(code3);
    effects.exit("chunkContent");
    previous2.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous2
    });
    previous2 = previous2.next;
    return chunkInside;
  }
}
function tokenizeContinuation(effects, ok3, nok) {
  const self2 = this;
  return startLookahead;
  function startLookahead(code3) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return nok(code3);
    }
    const tail = self2.events[self2.events.length - 1];
    if (!self2.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok3(code3);
    }
    return effects.interrupt(self2.parser.constructs.flow, nok, ok3)(code3);
  }
}
var content2, continuationConstruct;
var init_content2 = __esm({
  "node_modules/micromark-core-commonmark/lib/content.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    init_micromark_util_subtokenize();
    content2 = {
      resolve: resolveContent,
      tokenize: tokenizeContent
    };
    continuationConstruct = {
      partial: true,
      tokenize: tokenizeContinuation
    };
  }
});

// node_modules/micromark-factory-destination/index.js
function factoryDestination(effects, ok3, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code3) {
    if (code3 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code3);
      effects.exit(literalMarkerType);
      return enclosedBefore;
    }
    if (code3 === null || code3 === 32 || code3 === 41 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return raw2(code3);
  }
  function enclosedBefore(code3) {
    if (code3 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code3);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok3;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return enclosed(code3);
  }
  function enclosed(code3) {
    if (code3 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return enclosedBefore(code3);
    }
    if (code3 === null || code3 === 60 || markdownLineEnding(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? enclosedEscape : enclosed;
  }
  function enclosedEscape(code3) {
    if (code3 === 60 || code3 === 62 || code3 === 92) {
      effects.consume(code3);
      return enclosed;
    }
    return enclosed(code3);
  }
  function raw2(code3) {
    if (!balance && (code3 === null || code3 === 41 || markdownLineEndingOrSpace(code3))) {
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok3(code3);
    }
    if (balance < limit && code3 === 40) {
      effects.consume(code3);
      balance++;
      return raw2;
    }
    if (code3 === 41) {
      effects.consume(code3);
      balance--;
      return raw2;
    }
    if (code3 === null || code3 === 32 || code3 === 40 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? rawEscape : raw2;
  }
  function rawEscape(code3) {
    if (code3 === 40 || code3 === 41 || code3 === 92) {
      effects.consume(code3);
      return raw2;
    }
    return raw2(code3);
  }
}
var init_micromark_factory_destination = __esm({
  "node_modules/micromark-factory-destination/index.js"() {
    init_micromark_util_character();
  }
});

// node_modules/micromark-factory-label/index.js
function factoryLabel(effects, ok3, nok, type, markerType, stringType) {
  const self2 = this;
  let size = 0;
  let seen;
  return start;
  function start(code3) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code3);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code3) {
    if (size > 999 || code3 === null || code3 === 91 || code3 === 93 && !seen || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    code3 === 94 && !size && "_hiddenFootnoteSupport" in self2.parser.constructs) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok3;
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return labelInside(code3);
  }
  function labelInside(code3) {
    if (code3 === null || code3 === 91 || code3 === 93 || markdownLineEnding(code3) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code3);
    }
    effects.consume(code3);
    if (!seen) seen = !markdownSpace(code3);
    return code3 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return labelInside;
    }
    return labelInside(code3);
  }
}
var init_micromark_factory_label = __esm({
  "node_modules/micromark-factory-label/index.js"() {
    init_micromark_util_character();
  }
});

// node_modules/micromark-factory-title/index.js
function factoryTitle(effects, ok3, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code3) {
    if (code3 === 34 || code3 === 39 || code3 === 40) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      marker = code3 === 40 ? 41 : code3;
      return begin;
    }
    return nok(code3);
  }
  function begin(code3) {
    if (code3 === marker) {
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok3;
    }
    effects.enter(stringType);
    return atBreak(code3);
  }
  function atBreak(code3) {
    if (code3 === marker) {
      effects.exit(stringType);
      return begin(marker);
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return factorySpace(effects, atBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === marker || code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      return atBreak(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? escape : inside;
  }
  function escape(code3) {
    if (code3 === marker || code3 === 92) {
      effects.consume(code3);
      return inside;
    }
    return inside(code3);
  }
}
var init_micromark_factory_title = __esm({
  "node_modules/micromark-factory-title/index.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
  }
});

// node_modules/micromark-factory-whitespace/index.js
function factoryWhitespace(effects, ok3) {
  let seen;
  return start;
  function start(code3) {
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code3);
    }
    return ok3(code3);
  }
}
var init_micromark_factory_whitespace = __esm({
  "node_modules/micromark-factory-whitespace/index.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
  }
});

// node_modules/micromark-core-commonmark/lib/definition.js
function tokenizeDefinition(effects, ok3, nok) {
  const self2 = this;
  let identifier;
  return start;
  function start(code3) {
    effects.enter("definition");
    return before(code3);
  }
  function before(code3) {
    return factoryLabel.call(
      self2,
      effects,
      labelAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(code3);
  }
  function labelAfter(code3) {
    identifier = normalizeIdentifier(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1));
    if (code3 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code3);
      effects.exit("definitionMarker");
      return markerAfter;
    }
    return nok(code3);
  }
  function markerAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, destinationBefore)(code3) : destinationBefore(code3);
  }
  function destinationBefore(code3) {
    return factoryDestination(
      effects,
      destinationAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(code3);
  }
  function destinationAfter(code3) {
    return effects.attempt(titleBefore, after, after)(code3);
  }
  function after(code3) {
    return markdownSpace(code3) ? factorySpace(effects, afterWhitespace, "whitespace")(code3) : afterWhitespace(code3);
  }
  function afterWhitespace(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("definition");
      self2.parser.defined.push(identifier);
      return ok3(code3);
    }
    return nok(code3);
  }
}
function tokenizeTitleBefore(effects, ok3, nok) {
  return titleBefore2;
  function titleBefore2(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, beforeMarker)(code3) : nok(code3);
  }
  function beforeMarker(code3) {
    return factoryTitle(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code3);
  }
  function titleAfter(code3) {
    return markdownSpace(code3) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code3) : titleAfterOptionalWhitespace(code3);
  }
  function titleAfterOptionalWhitespace(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3);
  }
}
var definition, titleBefore;
var init_definition = __esm({
  "node_modules/micromark-core-commonmark/lib/definition.js"() {
    init_micromark_factory_destination();
    init_micromark_factory_label();
    init_micromark_factory_space();
    init_micromark_factory_title();
    init_micromark_factory_whitespace();
    init_micromark_util_character();
    init_micromark_util_normalize_identifier();
    definition = {
      name: "definition",
      tokenize: tokenizeDefinition
    };
    titleBefore = {
      partial: true,
      tokenize: tokenizeTitleBefore
    };
  }
});

// node_modules/micromark-core-commonmark/lib/hard-break-escape.js
function tokenizeHardBreakEscape(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.enter("hardBreakEscape");
    effects.consume(code3);
    return after;
  }
  function after(code3) {
    if (markdownLineEnding(code3)) {
      effects.exit("hardBreakEscape");
      return ok3(code3);
    }
    return nok(code3);
  }
}
var hardBreakEscape;
var init_hard_break_escape = __esm({
  "node_modules/micromark-core-commonmark/lib/hard-break-escape.js"() {
    init_micromark_util_character();
    hardBreakEscape = {
      name: "hardBreakEscape",
      tokenize: tokenizeHardBreakEscape
    };
  }
});

// node_modules/micromark-core-commonmark/lib/heading-atx.js
function resolveHeadingAtx(events, context2) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content3;
  let text8;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content3 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text8 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [["enter", content3, context2], ["enter", text8, context2], ["exit", text8, context2], ["exit", content3, context2]]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok3, nok) {
  let size = 0;
  return start;
  function start(code3) {
    effects.enter("atxHeading");
    return before(code3);
  }
  function before(code3) {
    effects.enter("atxHeadingSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === 35 && size++ < 6) {
      effects.consume(code3);
      return sequenceOpen;
    }
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      effects.exit("atxHeadingSequence");
      return atBreak(code3);
    }
    return nok(code3);
  }
  function atBreak(code3) {
    if (code3 === 35) {
      effects.enter("atxHeadingSequence");
      return sequenceFurther(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("atxHeading");
      return ok3(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, atBreak, "whitespace")(code3);
    }
    effects.enter("atxHeadingText");
    return data(code3);
  }
  function sequenceFurther(code3) {
    if (code3 === 35) {
      effects.consume(code3);
      return sequenceFurther;
    }
    effects.exit("atxHeadingSequence");
    return atBreak(code3);
  }
  function data(code3) {
    if (code3 === null || code3 === 35 || markdownLineEndingOrSpace(code3)) {
      effects.exit("atxHeadingText");
      return atBreak(code3);
    }
    effects.consume(code3);
    return data;
  }
}
var headingAtx;
var init_heading_atx = __esm({
  "node_modules/micromark-core-commonmark/lib/heading-atx.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    init_micromark_util_chunked();
    headingAtx = {
      name: "headingAtx",
      resolve: resolveHeadingAtx,
      tokenize: tokenizeHeadingAtx
    };
  }
});

// node_modules/micromark-util-html-tag-name/index.js
var htmlBlockNames, htmlRawNames;
var init_micromark_util_html_tag_name = __esm({
  "node_modules/micromark-util-html-tag-name/index.js"() {
    htmlBlockNames = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "search",
      "section",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ];
    htmlRawNames = ["pre", "script", "style", "textarea"];
  }
});

// node_modules/micromark-core-commonmark/lib/html-flow.js
function resolveToHtmlFlow(events) {
  let index11 = events.length;
  while (index11--) {
    if (events[index11][0] === "enter" && events[index11][1].type === "htmlFlow") {
      break;
    }
  }
  if (index11 > 1 && events[index11 - 2][1].type === "linePrefix") {
    events[index11][1].start = events[index11 - 2][1].start;
    events[index11 + 1][1].start = events[index11 - 2][1].start;
    events.splice(index11 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok3, nok) {
  const self2 = this;
  let marker;
  let closingTag;
  let buffer;
  let index11;
  let markerB;
  return start;
  function start(code3) {
    return before(code3);
  }
  function before(code3) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (code3 === 33) {
      effects.consume(code3);
      return declarationOpen;
    }
    if (code3 === 47) {
      effects.consume(code3);
      closingTag = true;
      return tagCloseStart;
    }
    if (code3 === 63) {
      effects.consume(code3);
      marker = 3;
      return self2.interrupt ? ok3 : continuationDeclarationInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      buffer = String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function declarationOpen(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      marker = 2;
      return commentOpenInside;
    }
    if (code3 === 91) {
      effects.consume(code3);
      marker = 5;
      index11 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      marker = 4;
      return self2.interrupt ? ok3 : continuationDeclarationInside;
    }
    return nok(code3);
  }
  function commentOpenInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return self2.interrupt ? ok3 : continuationDeclarationInside;
    }
    return nok(code3);
  }
  function cdataOpenInside(code3) {
    const value = "CDATA[";
    if (code3 === value.charCodeAt(index11++)) {
      effects.consume(code3);
      if (index11 === value.length) {
        return self2.interrupt ? ok3 : continuation;
      }
      return cdataOpenInside;
    }
    return nok(code3);
  }
  function tagCloseStart(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      buffer = String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function tagName(code3) {
    if (code3 === null || code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      const slash = code3 === 47;
      const name = buffer.toLowerCase();
      if (!slash && !closingTag && htmlRawNames.includes(name)) {
        marker = 1;
        return self2.interrupt ? ok3(code3) : continuation(code3);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        marker = 6;
        if (slash) {
          effects.consume(code3);
          return basicSelfClosing;
        }
        return self2.interrupt ? ok3(code3) : continuation(code3);
      }
      marker = 7;
      return self2.interrupt && !self2.parser.lazy[self2.now().line] ? nok(code3) : closingTag ? completeClosingTagAfter(code3) : completeAttributeNameBefore(code3);
    }
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      buffer += String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function basicSelfClosing(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return self2.interrupt ? ok3 : continuation;
    }
    return nok(code3);
  }
  function completeClosingTagAfter(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeClosingTagAfter;
    }
    return completeEnd(code3);
  }
  function completeAttributeNameBefore(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return completeEnd;
    }
    if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
      effects.consume(code3);
      return completeAttributeName;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeNameBefore;
    }
    return completeEnd(code3);
  }
  function completeAttributeName(code3) {
    if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code3);
  }
  function completeAttributeNameAfter(code3) {
    if (code3 === 61) {
      effects.consume(code3);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code3);
  }
  function completeAttributeValueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.consume(code3);
      markerB = code3;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeValueBefore;
    }
    return completeAttributeValueUnquoted(code3);
  }
  function completeAttributeValueQuoted(code3) {
    if (code3 === markerB) {
      effects.consume(code3);
      markerB = null;
      return completeAttributeValueQuotedAfter;
    }
    if (code3 === null || markdownLineEnding(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 47 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 || markdownLineEndingOrSpace(code3)) {
      return completeAttributeNameAfter(code3);
    }
    effects.consume(code3);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code3) {
    if (code3 === 47 || code3 === 62 || markdownSpace(code3)) {
      return completeAttributeNameBefore(code3);
    }
    return nok(code3);
  }
  function completeEnd(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return completeAfter;
    }
    return nok(code3);
  }
  function completeAfter(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return continuation(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAfter;
    }
    return nok(code3);
  }
  function continuation(code3) {
    if (code3 === 45 && marker === 2) {
      effects.consume(code3);
      return continuationCommentInside;
    }
    if (code3 === 60 && marker === 1) {
      effects.consume(code3);
      return continuationRawTagOpen;
    }
    if (code3 === 62 && marker === 4) {
      effects.consume(code3);
      return continuationClose;
    }
    if (code3 === 63 && marker === 3) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    if (code3 === 93 && marker === 5) {
      effects.consume(code3);
      return continuationCdataInside;
    }
    if (markdownLineEnding(code3) && (marker === 6 || marker === 7)) {
      effects.exit("htmlFlowData");
      return effects.check(blankLineBefore, continuationAfter, continuationStart)(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("htmlFlowData");
      return continuationStart(code3);
    }
    effects.consume(code3);
    return continuation;
  }
  function continuationStart(code3) {
    return effects.check(nonLazyContinuationStart, continuationStartNonLazy, continuationAfter)(code3);
  }
  function continuationStartNonLazy(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return continuationBefore;
  }
  function continuationBefore(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return continuationStart(code3);
    }
    effects.enter("htmlFlowData");
    return continuation(code3);
  }
  function continuationCommentInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationRawTagOpen(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code3);
  }
  function continuationRawEndTag(code3) {
    if (code3 === 62) {
      const name = buffer.toLowerCase();
      if (htmlRawNames.includes(name)) {
        effects.consume(code3);
        return continuationClose;
      }
      return continuation(code3);
    }
    if (asciiAlpha(code3) && buffer.length < 8) {
      effects.consume(code3);
      buffer += String.fromCharCode(code3);
      return continuationRawEndTag;
    }
    return continuation(code3);
  }
  function continuationCdataInside(code3) {
    if (code3 === 93) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationDeclarationInside(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return continuationClose;
    }
    if (code3 === 45 && marker === 2) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationClose(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("htmlFlowData");
      return continuationAfter(code3);
    }
    effects.consume(code3);
    return continuationClose;
  }
  function continuationAfter(code3) {
    effects.exit("htmlFlow");
    return ok3(code3);
  }
}
function tokenizeNonLazyContinuationStart(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return self2.parser.lazy[self2.now().line] ? nok(code3) : ok3(code3);
  }
}
function tokenizeBlankLineBefore(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return effects.attempt(blankLine, ok3, nok);
  }
}
var htmlFlow, blankLineBefore, nonLazyContinuationStart;
var init_html_flow = __esm({
  "node_modules/micromark-core-commonmark/lib/html-flow.js"() {
    init_micromark_util_character();
    init_micromark_util_html_tag_name();
    init_blank_line();
    htmlFlow = {
      concrete: true,
      name: "htmlFlow",
      resolveTo: resolveToHtmlFlow,
      tokenize: tokenizeHtmlFlow
    };
    blankLineBefore = {
      partial: true,
      tokenize: tokenizeBlankLineBefore
    };
    nonLazyContinuationStart = {
      partial: true,
      tokenize: tokenizeNonLazyContinuationStart
    };
  }
});

// node_modules/micromark-core-commonmark/lib/html-text.js
function tokenizeHtmlText(effects, ok3, nok) {
  const self2 = this;
  let marker;
  let index11;
  let returnState;
  return start;
  function start(code3) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (code3 === 33) {
      effects.consume(code3);
      return declarationOpen;
    }
    if (code3 === 47) {
      effects.consume(code3);
      return tagCloseStart;
    }
    if (code3 === 63) {
      effects.consume(code3);
      return instruction;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return tagOpen;
    }
    return nok(code3);
  }
  function declarationOpen(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentOpenInside;
    }
    if (code3 === 91) {
      effects.consume(code3);
      index11 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return declaration;
    }
    return nok(code3);
  }
  function commentOpenInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentEnd;
    }
    return nok(code3);
  }
  function comment3(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 45) {
      effects.consume(code3);
      return commentClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = comment3;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return comment3;
  }
  function commentClose(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentEnd;
    }
    return comment3(code3);
  }
  function commentEnd(code3) {
    return code3 === 62 ? end(code3) : code3 === 45 ? commentClose(code3) : comment3(code3);
  }
  function cdataOpenInside(code3) {
    const value = "CDATA[";
    if (code3 === value.charCodeAt(index11++)) {
      effects.consume(code3);
      return index11 === value.length ? cdata : cdataOpenInside;
    }
    return nok(code3);
  }
  function cdata(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.consume(code3);
      return cdataClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = cdata;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return cdata;
  }
  function cdataClose(code3) {
    if (code3 === 93) {
      effects.consume(code3);
      return cdataEnd;
    }
    return cdata(code3);
  }
  function cdataEnd(code3) {
    if (code3 === 62) {
      return end(code3);
    }
    if (code3 === 93) {
      effects.consume(code3);
      return cdataEnd;
    }
    return cdata(code3);
  }
  function declaration(code3) {
    if (code3 === null || code3 === 62) {
      return end(code3);
    }
    if (markdownLineEnding(code3)) {
      returnState = declaration;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return declaration;
  }
  function instruction(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 63) {
      effects.consume(code3);
      return instructionClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = instruction;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return instruction;
  }
  function instructionClose(code3) {
    return code3 === 62 ? end(code3) : instruction(code3);
  }
  function tagCloseStart(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return tagClose;
    }
    return nok(code3);
  }
  function tagClose(code3) {
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagClose;
    }
    return tagCloseBetween(code3);
  }
  function tagCloseBetween(code3) {
    if (markdownLineEnding(code3)) {
      returnState = tagCloseBetween;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagCloseBetween;
    }
    return end(code3);
  }
  function tagOpen(code3) {
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagOpen;
    }
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    return nok(code3);
  }
  function tagOpenBetween(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return end;
    }
    if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
      effects.consume(code3);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenBetween;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenBetween;
    }
    return end(code3);
  }
  function tagOpenAttributeName(code3) {
    if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code3);
  }
  function tagOpenAttributeNameAfter(code3) {
    if (code3 === 61) {
      effects.consume(code3);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeNameAfter;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code3);
  }
  function tagOpenAttributeValueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.consume(code3);
      marker = code3;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeValueBefore;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code3);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      marker = void 0;
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeValueQuoted;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    effects.consume(code3);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuotedAfter(code3) {
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    return nok(code3);
  }
  function end(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok3;
    }
    return nok(code3);
  }
  function lineEndingBefore(code3) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return lineEndingAfter;
  }
  function lineEndingAfter(code3) {
    return markdownSpace(code3) ? factorySpace(effects, lineEndingAfterPrefix, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3) : lineEndingAfterPrefix(code3);
  }
  function lineEndingAfterPrefix(code3) {
    effects.enter("htmlTextData");
    return returnState(code3);
  }
}
var htmlText;
var init_html_text = __esm({
  "node_modules/micromark-core-commonmark/lib/html-text.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    htmlText = {
      name: "htmlText",
      tokenize: tokenizeHtmlText
    };
  }
});

// node_modules/micromark-core-commonmark/lib/label-end.js
function resolveAllLabelEnd(events) {
  let index11 = -1;
  const newEvents = [];
  while (++index11 < events.length) {
    const token = events[index11][1];
    newEvents.push(events[index11]);
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      const offset = token.type === "labelImage" ? 4 : 2;
      token.type = "data";
      index11 += offset;
    }
  }
  if (events.length !== newEvents.length) {
    splice(events, 0, events.length, newEvents);
  }
  return events;
}
function resolveToLabelEnd(events, context2) {
  let index11 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index11--) {
    token = events[index11][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index11][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index11][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index11;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index11;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  const label = {
    type: "label",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[close][1].end
    }
  };
  const text8 = {
    type: "labelText",
    start: {
      ...events[open + offset + 2][1].end
    },
    end: {
      ...events[close - 2][1].start
    }
  };
  media = [["enter", group, context2], ["enter", label, context2]];
  media = push2(media, events.slice(open + 1, open + offset + 3));
  media = push2(media, [["enter", text8, context2]]);
  media = push2(media, resolveAll(context2.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context2));
  media = push2(media, [["exit", text8, context2], events[close - 2], events[close - 1], ["exit", label, context2]]);
  media = push2(media, events.slice(close + 1));
  media = push2(media, [["exit", group, context2]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok3, nok) {
  const self2 = this;
  let index11 = self2.events.length;
  let labelStart;
  let defined;
  while (index11--) {
    if ((self2.events[index11][1].type === "labelImage" || self2.events[index11][1].type === "labelLink") && !self2.events[index11][1]._balanced) {
      labelStart = self2.events[index11][1];
      break;
    }
  }
  return start;
  function start(code3) {
    if (!labelStart) {
      return nok(code3);
    }
    if (labelStart._inactive) {
      return labelEndNok(code3);
    }
    defined = self2.parser.defined.includes(normalizeIdentifier(self2.sliceSerialize({
      start: labelStart.end,
      end: self2.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code3);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return after;
  }
  function after(code3) {
    if (code3 === 40) {
      return effects.attempt(resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code3);
    }
    if (code3 === 91) {
      return effects.attempt(referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code3);
    }
    return defined ? labelEndOk(code3) : labelEndNok(code3);
  }
  function referenceNotFull(code3) {
    return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code3);
  }
  function labelEndOk(code3) {
    return ok3(code3);
  }
  function labelEndNok(code3) {
    labelStart._balanced = true;
    return nok(code3);
  }
}
function tokenizeResource(effects, ok3, nok) {
  return resourceStart;
  function resourceStart(code3) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code3);
    effects.exit("resourceMarker");
    return resourceBefore;
  }
  function resourceBefore(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceOpen)(code3) : resourceOpen(code3);
  }
  function resourceOpen(code3) {
    if (code3 === 41) {
      return resourceEnd(code3);
    }
    return factoryDestination(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code3);
  }
  function resourceDestinationAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceBetween)(code3) : resourceEnd(code3);
  }
  function resourceDestinationMissing(code3) {
    return nok(code3);
  }
  function resourceBetween(code3) {
    if (code3 === 34 || code3 === 39 || code3 === 40) {
      return factoryTitle(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code3);
    }
    return resourceEnd(code3);
  }
  function resourceTitleAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceEnd)(code3) : resourceEnd(code3);
  }
  function resourceEnd(code3) {
    if (code3 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code3);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok3;
    }
    return nok(code3);
  }
}
function tokenizeReferenceFull(effects, ok3, nok) {
  const self2 = this;
  return referenceFull;
  function referenceFull(code3) {
    return factoryLabel.call(self2, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code3);
  }
  function referenceFullAfter(code3) {
    return self2.parser.defined.includes(normalizeIdentifier(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1))) ? ok3(code3) : nok(code3);
  }
  function referenceFullMissing(code3) {
    return nok(code3);
  }
}
function tokenizeReferenceCollapsed(effects, ok3, nok) {
  return referenceCollapsedStart;
  function referenceCollapsedStart(code3) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code3);
    effects.exit("referenceMarker");
    return referenceCollapsedOpen;
  }
  function referenceCollapsedOpen(code3) {
    if (code3 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code3);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok3;
    }
    return nok(code3);
  }
}
var labelEnd, resourceConstruct, referenceFullConstruct, referenceCollapsedConstruct;
var init_label_end = __esm({
  "node_modules/micromark-core-commonmark/lib/label-end.js"() {
    init_micromark_factory_destination();
    init_micromark_factory_label();
    init_micromark_factory_title();
    init_micromark_factory_whitespace();
    init_micromark_util_character();
    init_micromark_util_chunked();
    init_micromark_util_normalize_identifier();
    init_micromark_util_resolve_all();
    labelEnd = {
      name: "labelEnd",
      resolveAll: resolveAllLabelEnd,
      resolveTo: resolveToLabelEnd,
      tokenize: tokenizeLabelEnd
    };
    resourceConstruct = {
      tokenize: tokenizeResource
    };
    referenceFullConstruct = {
      tokenize: tokenizeReferenceFull
    };
    referenceCollapsedConstruct = {
      tokenize: tokenizeReferenceCollapsed
    };
  }
});

// node_modules/micromark-core-commonmark/lib/label-start-image.js
function tokenizeLabelStartImage(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code3);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 91) {
      effects.enter("labelMarker");
      effects.consume(code3);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code3) : ok3(code3);
  }
}
var labelStartImage;
var init_label_start_image = __esm({
  "node_modules/micromark-core-commonmark/lib/label-start-image.js"() {
    init_label_end();
    labelStartImage = {
      name: "labelStartImage",
      resolveAll: labelEnd.resolveAll,
      tokenize: tokenizeLabelStartImage
    };
  }
});

// node_modules/micromark-core-commonmark/lib/label-start-link.js
function tokenizeLabelStartLink(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code3);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code3) : ok3(code3);
  }
}
var labelStartLink;
var init_label_start_link = __esm({
  "node_modules/micromark-core-commonmark/lib/label-start-link.js"() {
    init_label_end();
    labelStartLink = {
      name: "labelStartLink",
      resolveAll: labelEnd.resolveAll,
      tokenize: tokenizeLabelStartLink
    };
  }
});

// node_modules/micromark-core-commonmark/lib/line-ending.js
function tokenizeLineEnding(effects, ok3) {
  return start;
  function start(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, ok3, "linePrefix");
  }
}
var lineEnding;
var init_line_ending = __esm({
  "node_modules/micromark-core-commonmark/lib/line-ending.js"() {
    init_micromark_factory_space();
    lineEnding = {
      name: "lineEnding",
      tokenize: tokenizeLineEnding
    };
  }
});

// node_modules/micromark-core-commonmark/lib/thematic-break.js
function tokenizeThematicBreak(effects, ok3, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code3) {
    effects.enter("thematicBreak");
    return before(code3);
  }
  function before(code3) {
    marker = code3;
    return atBreak(code3);
  }
  function atBreak(code3) {
    if (code3 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code3);
    }
    if (size >= 3 && (code3 === null || markdownLineEnding(code3))) {
      effects.exit("thematicBreak");
      return ok3(code3);
    }
    return nok(code3);
  }
  function sequence(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return markdownSpace(code3) ? factorySpace(effects, atBreak, "whitespace")(code3) : atBreak(code3);
  }
}
var thematicBreak;
var init_thematic_break = __esm({
  "node_modules/micromark-core-commonmark/lib/thematic-break.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    thematicBreak = {
      name: "thematicBreak",
      tokenize: tokenizeThematicBreak
    };
  }
});

// node_modules/micromark-core-commonmark/lib/list.js
function tokenizeListStart(effects, ok3, nok) {
  const self2 = this;
  const tail = self2.events[self2.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code3) {
    const kind = self2.containerState.type || (code3 === 42 || code3 === 43 || code3 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self2.containerState.marker || code3 === self2.containerState.marker : asciiDigit(code3)) {
      if (!self2.containerState.type) {
        self2.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code3 === 42 || code3 === 45 ? effects.check(thematicBreak, nok, atMarker)(code3) : atMarker(code3);
      }
      if (!self2.interrupt || code3 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code3);
      }
    }
    return nok(code3);
  }
  function inside(code3) {
    if (asciiDigit(code3) && ++size < 10) {
      effects.consume(code3);
      return inside;
    }
    if ((!self2.interrupt || size < 2) && (self2.containerState.marker ? code3 === self2.containerState.marker : code3 === 41 || code3 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code3);
    }
    return nok(code3);
  }
  function atMarker(code3) {
    effects.enter("listItemMarker");
    effects.consume(code3);
    effects.exit("listItemMarker");
    self2.containerState.marker = self2.containerState.marker || code3;
    return effects.check(
      blankLine,
      // Can’t be empty when interrupting.
      self2.interrupt ? nok : onBlank,
      effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix)
    );
  }
  function onBlank(code3) {
    self2.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code3);
  }
  function otherPrefix(code3) {
    if (markdownSpace(code3)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code3);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code3);
  }
  function endOfPrefix(code3) {
    self2.containerState.size = initialSize + self2.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok3(code3);
  }
}
function tokenizeListContinuation(effects, ok3, nok) {
  const self2 = this;
  self2.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code3) {
    self2.containerState.furtherBlankLines = self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine;
    return factorySpace(effects, ok3, "listItemIndent", self2.containerState.size + 1)(code3);
  }
  function notBlank(code3) {
    if (self2.containerState.furtherBlankLines || !markdownSpace(code3)) {
      self2.containerState.furtherBlankLines = void 0;
      self2.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code3);
    }
    self2.containerState.furtherBlankLines = void 0;
    self2.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok3, notInCurrentItem)(code3);
  }
  function notInCurrentItem(code3) {
    self2.containerState._closeFlow = true;
    self2.interrupt = void 0;
    return factorySpace(effects, effects.attempt(list, ok3, nok), "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
  }
}
function tokenizeIndent(effects, ok3, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self2.containerState.size + 1);
  function afterPrefix(code3) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self2.containerState.size ? ok3(code3) : nok(code3);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok3, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code3) {
    const tail = self2.events[self2.events.length - 1];
    return !markdownSpace(code3) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok3(code3) : nok(code3);
  }
}
var list, listItemPrefixWhitespaceConstruct, indentConstruct;
var init_list = __esm({
  "node_modules/micromark-core-commonmark/lib/list.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    init_blank_line();
    init_thematic_break();
    list = {
      continuation: {
        tokenize: tokenizeListContinuation
      },
      exit: tokenizeListEnd,
      name: "list",
      tokenize: tokenizeListStart
    };
    listItemPrefixWhitespaceConstruct = {
      partial: true,
      tokenize: tokenizeListItemPrefixWhitespace
    };
    indentConstruct = {
      partial: true,
      tokenize: tokenizeIndent
    };
  }
});

// node_modules/micromark-core-commonmark/lib/setext-underline.js
function resolveToSetextUnderline(events, context2) {
  let index11 = events.length;
  let content3;
  let text8;
  let definition3;
  while (index11--) {
    if (events[index11][0] === "enter") {
      if (events[index11][1].type === "content") {
        content3 = index11;
        break;
      }
      if (events[index11][1].type === "paragraph") {
        text8 = index11;
      }
    } else {
      if (events[index11][1].type === "content") {
        events.splice(index11, 1);
      }
      if (!definition3 && events[index11][1].type === "definition") {
        definition3 = index11;
      }
    }
  }
  const heading3 = {
    type: "setextHeading",
    start: {
      ...events[content3][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  events[text8][1].type = "setextHeadingText";
  if (definition3) {
    events.splice(text8, 0, ["enter", heading3, context2]);
    events.splice(definition3 + 1, 0, ["exit", events[content3][1], context2]);
    events[content3][1].end = {
      ...events[definition3][1].end
    };
  } else {
    events[content3][1] = heading3;
  }
  events.push(["exit", heading3, context2]);
  return events;
}
function tokenizeSetextUnderline(effects, ok3, nok) {
  const self2 = this;
  let marker;
  return start;
  function start(code3) {
    let index11 = self2.events.length;
    let paragraph3;
    while (index11--) {
      if (self2.events[index11][1].type !== "lineEnding" && self2.events[index11][1].type !== "linePrefix" && self2.events[index11][1].type !== "content") {
        paragraph3 = self2.events[index11][1].type === "paragraph";
        break;
      }
    }
    if (!self2.parser.lazy[self2.now().line] && (self2.interrupt || paragraph3)) {
      effects.enter("setextHeadingLine");
      marker = code3;
      return before(code3);
    }
    return nok(code3);
  }
  function before(code3) {
    effects.enter("setextHeadingLineSequence");
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return inside;
    }
    effects.exit("setextHeadingLineSequence");
    return markdownSpace(code3) ? factorySpace(effects, after, "lineSuffix")(code3) : after(code3);
  }
  function after(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("setextHeadingLine");
      return ok3(code3);
    }
    return nok(code3);
  }
}
var setextUnderline;
var init_setext_underline = __esm({
  "node_modules/micromark-core-commonmark/lib/setext-underline.js"() {
    init_micromark_factory_space();
    init_micromark_util_character();
    setextUnderline = {
      name: "setextUnderline",
      resolveTo: resolveToSetextUnderline,
      tokenize: tokenizeSetextUnderline
    };
  }
});

// node_modules/micromark-core-commonmark/index.js
var init_micromark_core_commonmark = __esm({
  "node_modules/micromark-core-commonmark/index.js"() {
    init_attention();
    init_autolink();
    init_blank_line();
    init_block_quote();
    init_character_escape();
    init_character_reference();
    init_code_fenced();
    init_code_indented();
    init_code_text();
    init_content2();
    init_definition();
    init_hard_break_escape();
    init_heading_atx();
    init_html_flow();
    init_html_text();
    init_label_end();
    init_label_start_image();
    init_label_start_link();
    init_line_ending();
    init_list();
    init_setext_underline();
    init_thematic_break();
  }
});

// node_modules/micromark/lib/initialize/flow.js
function initializeFlow(effects) {
  const self2 = this;
  const initial2 = effects.attempt(
    // Try to parse a blank line.
    blankLine,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content2, afterConstruct)), "linePrefix"))
  );
  return initial2;
  function atBlankEnding(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code3);
    effects.exit("lineEndingBlank");
    self2.currentConstruct = void 0;
    return initial2;
  }
  function afterConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    self2.currentConstruct = void 0;
    return initial2;
  }
}
var flow;
var init_flow = __esm({
  "node_modules/micromark/lib/initialize/flow.js"() {
    init_micromark_core_commonmark();
    init_micromark_factory_space();
    flow = {
      tokenize: initializeFlow
    };
  }
});

// node_modules/micromark/lib/initialize/text.js
function initializeFactory(field) {
  return {
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0),
    tokenize: initializeText
  };
  function initializeText(effects) {
    const self2 = this;
    const constructs2 = this.parser.constructs[field];
    const text8 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code3) {
      return atBreak(code3) ? text8(code3) : notText(code3);
    }
    function notText(code3) {
      if (code3 === null) {
        effects.consume(code3);
        return;
      }
      effects.enter("data");
      effects.consume(code3);
      return data;
    }
    function data(code3) {
      if (atBreak(code3)) {
        effects.exit("data");
        return text8(code3);
      }
      effects.consume(code3);
      return data;
    }
    function atBreak(code3) {
      if (code3 === null) {
        return true;
      }
      const list5 = constructs2[code3];
      let index11 = -1;
      if (list5) {
        while (++index11 < list5.length) {
          const item = list5[index11];
          if (!item.previous || item.previous.call(self2, self2.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context2) {
    let index11 = -1;
    let enter;
    while (++index11 <= events.length) {
      if (enter === void 0) {
        if (events[index11] && events[index11][1].type === "data") {
          enter = index11;
          index11++;
        }
      } else if (!events[index11] || events[index11][1].type !== "data") {
        if (index11 !== enter + 2) {
          events[enter][1].end = events[index11 - 1][1].end;
          events.splice(enter + 2, index11 - enter - 2);
          index11 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context2) : events;
  }
}
function resolveAllLineSuffixes(events, context2) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context2.sliceStream(data);
      let index11 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index11--) {
        const chunk = chunks[index11];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex) break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) {
        } else {
          index11++;
          break;
        }
      }
      if (context2._contentTypeTextTrailing && eventIndex === events.length) {
        size = 0;
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: index11 ? bufferIndex : data.start._bufferIndex + bufferIndex,
            _index: data.start._index + index11,
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size
          },
          end: {
            ...data.end
          }
        };
        data.end = {
          ...token.start
        };
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ["enter", token, context2], ["exit", token, context2]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}
var resolver, string, text2;
var init_text = __esm({
  "node_modules/micromark/lib/initialize/text.js"() {
    resolver = {
      resolveAll: createResolver()
    };
    string = initializeFactory("string");
    text2 = initializeFactory("text");
  }
});

// node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document3,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text3
});
var document3, contentInitial, flowInitial, flow2, string2, text3, insideSpan, attentionMarkers, disable;
var init_constructs = __esm({
  "node_modules/micromark/lib/constructs.js"() {
    init_micromark_core_commonmark();
    init_text();
    document3 = {
      [42]: list,
      [43]: list,
      [45]: list,
      [48]: list,
      [49]: list,
      [50]: list,
      [51]: list,
      [52]: list,
      [53]: list,
      [54]: list,
      [55]: list,
      [56]: list,
      [57]: list,
      [62]: blockQuote
    };
    contentInitial = {
      [91]: definition
    };
    flowInitial = {
      [-2]: codeIndented,
      [-1]: codeIndented,
      [32]: codeIndented
    };
    flow2 = {
      [35]: headingAtx,
      [42]: thematicBreak,
      [45]: [setextUnderline, thematicBreak],
      [60]: htmlFlow,
      [61]: setextUnderline,
      [95]: thematicBreak,
      [96]: codeFenced,
      [126]: codeFenced
    };
    string2 = {
      [38]: characterReference,
      [92]: characterEscape
    };
    text3 = {
      [-5]: lineEnding,
      [-4]: lineEnding,
      [-3]: lineEnding,
      [33]: labelStartImage,
      [38]: characterReference,
      [42]: attention,
      [60]: [autolink, htmlText],
      [91]: labelStartLink,
      [92]: [hardBreakEscape, characterEscape],
      [93]: labelEnd,
      [95]: attention,
      [96]: codeText
    };
    insideSpan = {
      null: [attention, resolver]
    };
    attentionMarkers = {
      null: [42, 95]
    };
    disable = {
      null: []
    };
  }
});

// node_modules/micromark/lib/create-tokenizer.js
function createTokenizer(parser, initialize, from) {
  let point4 = {
    _bufferIndex: -1,
    _index: 0,
    line: from && from.line || 1,
    column: from && from.column || 1,
    offset: from && from.offset || 0
  };
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  let consumed = true;
  const effects = {
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    consume,
    enter,
    exit: exit2,
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context2 = {
    code: null,
    containerState: {},
    defineSkip,
    events: [],
    now,
    parser,
    previous: null,
    sliceSerialize,
    sliceStream,
    write
  };
  let state2 = initialize.tokenize.call(context2, effects);
  let expectedCode;
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context2;
  function write(slice) {
    chunks = push2(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context2.events = resolveAll(resolveAllConstructs, context2.events, context2);
    return context2.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    const {
      _bufferIndex,
      _index,
      line,
      column,
      offset
    } = point4;
    return {
      _bufferIndex,
      _index,
      line,
      column,
      offset
    };
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point4._index < chunks.length) {
      const chunk = chunks[point4._index];
      if (typeof chunk === "string") {
        chunkIndex = point4._index;
        if (point4._bufferIndex < 0) {
          point4._bufferIndex = 0;
        }
        while (point4._index === chunkIndex && point4._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point4._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code3) {
    consumed = void 0;
    expectedCode = code3;
    state2 = state2(code3);
  }
  function consume(code3) {
    if (markdownLineEnding(code3)) {
      point4.line++;
      point4.column = 1;
      point4.offset += code3 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code3 !== -1) {
      point4.column++;
      point4.offset++;
    }
    if (point4._bufferIndex < 0) {
      point4._index++;
    } else {
      point4._bufferIndex++;
      if (point4._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
      // strings.
      /** @type {string} */
      chunks[point4._index].length) {
        point4._bufferIndex = -1;
        point4._index++;
      }
    }
    context2.previous = code3;
    consumed = true;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context2.events.push(["enter", token, context2]);
    stack.push(token);
    return token;
  }
  function exit2(type) {
    const token = stack.pop();
    token.end = now();
    context2.events.push(["exit", token, context2]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs2)
      ) : "tokenize" in constructs2 ? (
        // Looks like a construct.
        handleListOfConstructs([
          /** @type {Construct} */
          constructs2
        ])
      ) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map4) {
        return start;
        function start(code3) {
          const left = code3 !== null && map4[code3];
          const all3 = code3 !== null && map4.null;
          const list5 = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(left) ? left : left ? [left] : [],
            ...Array.isArray(all3) ? all3 : all3 ? [all3] : []
          ];
          return handleListOfConstructs(list5)(code3);
        }
      }
      function handleListOfConstructs(list5) {
        listOfConstructs = list5;
        constructIndex = 0;
        if (list5.length === 0) {
          return bogusState;
        }
        return handleConstruct(list5[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code3) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context2.currentConstruct = construct;
          }
          if (construct.name && context2.parser.constructs.disable.null.includes(construct.name)) {
            return nok(code3);
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context2), fields) : context2,
            effects,
            ok3,
            nok
          )(code3);
        }
      }
      function ok3(code3) {
        consumed = true;
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code3) {
        consumed = true;
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context2.events, from2, context2.events.length - from2, construct.resolve(context2.events.slice(from2), context2));
    }
    if (construct.resolveTo) {
      context2.events = construct.resolveTo(context2.events, context2);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context2.previous;
    const startCurrentConstruct = context2.currentConstruct;
    const startEventsIndex = context2.events.length;
    const startStack = Array.from(stack);
    return {
      from: startEventsIndex,
      restore
    };
    function restore() {
      point4 = startPoint;
      context2.previous = startPrevious;
      context2.currentConstruct = startCurrentConstruct;
      context2.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point4.line in columnStart && point4.column < 2) {
      point4.column = columnStart[point4.line];
      point4.offset += columnStart[point4.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      const head3 = view[0];
      if (typeof head3 === "string") {
        view[0] = head3.slice(startBufferIndex);
      } else {
        view.shift();
      }
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index11 = -1;
  const result = [];
  let atTab;
  while (++index11 < chunks.length) {
    const chunk = chunks[index11];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else switch (chunk) {
      case -5: {
        value = "\r";
        break;
      }
      case -4: {
        value = "\n";
        break;
      }
      case -3: {
        value = "\r\n";
        break;
      }
      case -2: {
        value = expandTabs ? " " : "	";
        break;
      }
      case -1: {
        if (!expandTabs && atTab) continue;
        value = " ";
        break;
      }
      default: {
        value = String.fromCharCode(chunk);
      }
    }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}
var init_create_tokenizer = __esm({
  "node_modules/micromark/lib/create-tokenizer.js"() {
    init_micromark_util_character();
    init_micromark_util_chunked();
    init_micromark_util_resolve_all();
  }
});

// node_modules/micromark/lib/parse.js
function parse2(options2) {
  const settings = options2 || {};
  const constructs2 = (
    /** @type {FullNormalizedExtension} */
    combineExtensions([constructs_exports, ...settings.extensions || []])
  );
  const parser = {
    constructs: constructs2,
    content: create2(content),
    defined: [],
    document: create2(document2),
    flow: create2(flow),
    lazy: {},
    string: create2(string),
    text: create2(text2)
  };
  return parser;
  function create2(initial2) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial2, from);
    }
  }
}
var init_parse = __esm({
  "node_modules/micromark/lib/parse.js"() {
    init_micromark_util_combine_extensions();
    init_content();
    init_document();
    init_flow();
    init_text();
    init_constructs();
    init_create_tokenizer();
  }
});

// node_modules/micromark/lib/postprocess.js
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}
var init_postprocess = __esm({
  "node_modules/micromark/lib/postprocess.js"() {
    init_micromark_util_subtokenize();
  }
});

// node_modules/micromark/lib/preprocess.js
function preprocess() {
  let column = 1;
  let buffer = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code3;
    value = buffer + (typeof value === "string" ? value.toString() : new TextDecoder(encoding || void 0).decode(value));
    startPosition = 0;
    buffer = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code3 = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code3 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code3) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next) chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn) chunks.push(-5);
      if (buffer) chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}
var search;
var init_preprocess = __esm({
  "node_modules/micromark/lib/preprocess.js"() {
    search = /[\0\t\n\r]/g;
  }
});

// node_modules/micromark/index.js
var init_micromark = __esm({
  "node_modules/micromark/index.js"() {
    init_parse();
    init_postprocess();
    init_preprocess();
  }
});

// node_modules/micromark-util-decode-string/index.js
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head3 = $2.charCodeAt(0);
  if (head3 === 35) {
    const head4 = $2.charCodeAt(1);
    const hex = head4 === 120 || head4 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}
var characterEscapeOrReference;
var init_micromark_util_decode_string = __esm({
  "node_modules/micromark-util-decode-string/index.js"() {
    init_decode_named_character_reference();
    init_micromark_util_decode_numeric_character_reference();
    characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  }
});

// node_modules/unist-util-stringify-position/lib/index.js
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point(value);
  }
  return "";
}
function point(point4) {
  return index4(point4 && point4.line) + ":" + index4(point4 && point4.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index4(value) {
  return value && typeof value === "number" ? value : 1;
}
var init_lib2 = __esm({
  "node_modules/unist-util-stringify-position/lib/index.js"() {
  }
});

// node_modules/unist-util-stringify-position/index.js
var init_unist_util_stringify_position = __esm({
  "node_modules/unist-util-stringify-position/index.js"() {
    init_lib2();
  }
});

// node_modules/mdast-util-from-markdown/lib/index.js
function fromMarkdown(value, encoding, options2) {
  if (typeof encoding !== "string") {
    options2 = encoding;
    encoding = void 0;
  }
  return compiler(options2)(postprocess(parse2(options2).document().write(preprocess()(value, encoding, true))));
}
function compiler(options2) {
  const config = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: opener(link3),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading3),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText2, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition3),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis3),
      hardBreakEscape: opener(hardBreak3),
      hardBreakTrailing: opener(hardBreak3),
      htmlFlow: opener(html8, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html8, buffer),
      htmlTextData: onenterdata,
      image: opener(image3),
      label: buffer,
      link: opener(link3),
      listItem: opener(listItem3),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list5, onenterlistordered),
      listUnordered: opener(list5),
      paragraph: opener(paragraph3),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading3),
      strong: opener(strong3),
      thematicBreak: opener(thematicBreak4)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      characterReference: onexitcharacterreference,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  };
  configure(config, (options2 || {}).mdastExtensions || []);
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const context2 = {
      stack: [tree],
      tokenStack: [],
      config,
      enter,
      exit: exit2,
      buffer,
      resume,
      data
    };
    const listStack = [];
    let index11 = -1;
    while (++index11 < events.length) {
      if (events[index11][1].type === "listOrdered" || events[index11][1].type === "listUnordered") {
        if (events[index11][0] === "enter") {
          listStack.push(index11);
        } else {
          const tail = listStack.pop();
          index11 = prepareList(events, tail, index11);
        }
      }
    }
    index11 = -1;
    while (++index11 < events.length) {
      const handler = config[events[index11][0]];
      if (own2.call(handler, events[index11][1].type)) {
        handler[events[index11][1].type].call(Object.assign({
          sliceSerialize: events[index11][2].sliceSerialize
        }, context2), events[index11][1]);
      }
    }
    if (context2.tokenStack.length > 0) {
      const tail = context2.tokenStack[context2.tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context2, void 0, tail[0]);
    }
    tree.position = {
      start: point2(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point2(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index11 = -1;
    while (++index11 < config.transforms.length) {
      tree = config.transforms[index11](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index11 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem4;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index11 <= length) {
      const event = events[index11];
      switch (event[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          if (event[0] === "enter") {
            containerBalance++;
          } else {
            containerBalance--;
          }
          atMarker = void 0;
          break;
        }
        case "lineEndingBlank": {
          if (event[0] === "enter") {
            if (listItem4 && !atMarker && !containerBalance && !firstBlankLineIndex) {
              firstBlankLineIndex = index11;
            }
            atMarker = void 0;
          }
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace": {
          break;
        }
        default: {
          atMarker = void 0;
        }
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem4) {
          let tailIndex = index11;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit") continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
            } else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem4._spread = true;
          }
          listItem4.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index11, 0, ["exit", listItem4, event[2]]);
          index11++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          const item = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          listItem4 = item;
          events.splice(index11, 0, ["enter", item, event[2]]);
          index11++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function opener(create2, and) {
    return open;
    function open(token) {
      enter.call(this, create2(token), token);
      if (and) and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node2, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    const siblings2 = parent.children;
    siblings2.push(node2);
    this.stack.push(node2);
    this.tokenStack.push([token, errorHandler || void 0]);
    node2.position = {
      start: point2(token.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) and.call(this, token);
      exit2.call(this, token);
    }
  }
  function exit2(token, onExitError) {
    const node2 = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it\u2019s not open");
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node2.position.end = point2(token.end);
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    this.data.expectingFirstListItemValue = true;
  }
  function onenterlistitemvalue(token) {
    if (this.data.expectingFirstListItemValue) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      this.data.expectingFirstListItemValue = void 0;
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.meta = data2;
  }
  function onexitcodefencedfence() {
    if (this.data.flowCodeInside) return;
    this.buffer();
    this.data.flowCodeInside = true;
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    this.data.flowCodeInside = void 0;
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    if (!node2.depth) {
      const depth = this.sliceSerialize(token).length;
      node2.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    this.data.setextHeadingSlurpLineEnding = true;
  }
  function onexitsetextheadinglinesequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    node2.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function onenterdata(token) {
    const node2 = this.stack[this.stack.length - 1];
    const siblings2 = node2.children;
    let tail = siblings2[siblings2.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text8();
      tail.position = {
        start: point2(token.start),
        // @ts-expect-error: we’ll add `end` later.
        end: void 0
      };
      siblings2.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point2(token.end);
  }
  function onexitlineending(token) {
    const context2 = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const tail = context2.children[context2.children.length - 1];
      tail.position.end = point2(token.end);
      this.data.atHardBreak = void 0;
      return;
    }
    if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context2.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    this.data.atHardBreak = true;
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitlink() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitimage() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitlabeltext(token) {
    const string3 = this.sliceSerialize(token);
    const ancestor = this.stack[this.stack.length - 2];
    ancestor.label = decodeString(string3);
    ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    this.data.inReference = true;
    if (node2.type === "link") {
      const children2 = fragment.children;
      node2.children = children2;
    } else {
      node2.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitresource() {
    this.data.inReference = void 0;
  }
  function onenterreference() {
    this.data.referenceType = "collapsed";
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    this.data.referenceType = "full";
  }
  function onexitcharacterreferencemarker(token) {
    this.data.characterReferenceType = token.type;
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = this.data.characterReferenceType;
    let value;
    if (type) {
      value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      this.data.characterReferenceType = void 0;
    } else {
      const result = decodeNamedCharacterReference(data2);
      value = result;
    }
    const tail = this.stack[this.stack.length - 1];
    tail.value += value;
  }
  function onexitcharacterreference(token) {
    const tail = this.stack.pop();
    tail.position.end = point2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition3() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis3() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading3() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function hardBreak3() {
    return {
      type: "break"
    };
  }
  function html8() {
    return {
      type: "html",
      value: ""
    };
  }
  function image3() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link3() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list5(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem3(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph3() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong3() {
    return {
      type: "strong",
      children: []
    };
  }
  function text8() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak4() {
    return {
      type: "thematicBreak"
    };
  }
}
function point2(d) {
  return {
    line: d.line,
    column: d.column,
    offset: d.offset
  };
}
function configure(combined, extensions) {
  let index11 = -1;
  while (++index11 < extensions.length) {
    const value = extensions[index11];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
}
function extension(combined, extension2) {
  let key3;
  for (key3 in extension2) {
    if (own2.call(extension2, key3)) {
      switch (key3) {
        case "canContainEols": {
          const right = extension2[key3];
          if (right) {
            combined[key3].push(...right);
          }
          break;
        }
        case "transforms": {
          const right = extension2[key3];
          if (right) {
            combined[key3].push(...right);
          }
          break;
        }
        case "enter":
        case "exit": {
          const right = extension2[key3];
          if (right) {
            Object.assign(combined[key3], right);
          }
          break;
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open");
  } else {
    throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open");
  }
}
var own2;
var init_lib3 = __esm({
  "node_modules/mdast-util-from-markdown/lib/index.js"() {
    init_mdast_util_to_string();
    init_micromark();
    init_micromark_util_decode_numeric_character_reference();
    init_micromark_util_decode_string();
    init_micromark_util_normalize_identifier();
    init_decode_named_character_reference();
    init_unist_util_stringify_position();
    own2 = {}.hasOwnProperty;
  }
});

// node_modules/mdast-util-from-markdown/index.js
var init_mdast_util_from_markdown = __esm({
  "node_modules/mdast-util-from-markdown/index.js"() {
    init_lib3();
  }
});

// node_modules/remark-parse/lib/index.js
function remarkParse(options2) {
  const self2 = this;
  self2.parser = parser;
  function parser(doc) {
    return fromMarkdown(doc, {
      ...self2.data("settings"),
      ...options2,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self2.data("micromarkExtensions") || [],
      mdastExtensions: self2.data("fromMarkdownExtensions") || []
    });
  }
}
var init_lib4 = __esm({
  "node_modules/remark-parse/lib/index.js"() {
    init_mdast_util_from_markdown();
  }
});

// node_modules/remark-parse/index.js
var init_remark_parse = __esm({
  "node_modules/remark-parse/index.js"() {
    init_lib4();
  }
});

// node_modules/zwitch/index.js
function zwitch(key3, options2) {
  const settings = options2 || {};
  function one3(value, ...parameters) {
    let fn = one3.invalid;
    const handlers2 = one3.handlers;
    if (value && own3.call(value, key3)) {
      const id = String(value[key3]);
      fn = own3.call(handlers2, id) ? handlers2[id] : one3.unknown;
    }
    if (fn) {
      return fn.call(this, value, ...parameters);
    }
  }
  one3.handlers = settings.handlers || {};
  one3.invalid = settings.invalid;
  one3.unknown = settings.unknown;
  return one3;
}
var own3;
var init_zwitch = __esm({
  "node_modules/zwitch/index.js"() {
    own3 = {}.hasOwnProperty;
  }
});

// node_modules/mdast-util-to-markdown/lib/configure.js
function configure2(base2, extension2) {
  let index11 = -1;
  let key3;
  if (extension2.extensions) {
    while (++index11 < extension2.extensions.length) {
      configure2(base2, extension2.extensions[index11]);
    }
  }
  for (key3 in extension2) {
    if (own4.call(extension2, key3)) {
      switch (key3) {
        case "extensions": {
          break;
        }
        /* c8 ignore next 4 */
        case "unsafe": {
          list2(base2[key3], extension2[key3]);
          break;
        }
        case "join": {
          list2(base2[key3], extension2[key3]);
          break;
        }
        case "handlers": {
          map(base2[key3], extension2[key3]);
          break;
        }
        default: {
          base2.options[key3] = extension2[key3];
        }
      }
    }
  }
  return base2;
}
function list2(left, right) {
  if (right) {
    left.push(...right);
  }
}
function map(left, right) {
  if (right) {
    Object.assign(left, right);
  }
}
var own4;
var init_configure = __esm({
  "node_modules/mdast-util-to-markdown/lib/configure.js"() {
    own4 = {}.hasOwnProperty;
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function blockquote(node2, _, state2, info) {
  const exit2 = state2.enter("blockquote");
  const tracker = state2.createTracker(info);
  tracker.move("> ");
  tracker.shift(2);
  const value = state2.indentLines(
    state2.containerFlow(node2, tracker.current()),
    map2
  );
  exit2();
  return value;
}
function map2(line, _, blank) {
  return ">" + (blank ? "" : " ") + line;
}
var init_blockquote = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/blockquote.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function patternInScope(stack, pattern2) {
  return listInScope(stack, pattern2.inConstruct, true) && !listInScope(stack, pattern2.notInConstruct, false);
}
function listInScope(stack, list5, none) {
  if (typeof list5 === "string") {
    list5 = [list5];
  }
  if (!list5 || list5.length === 0) {
    return none;
  }
  let index11 = -1;
  while (++index11 < list5.length) {
    if (stack.includes(list5[index11])) {
      return true;
    }
  }
  return false;
}
var init_pattern_in_scope = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/break.js
function hardBreak(_, _1, state2, info) {
  let index11 = -1;
  while (++index11 < state2.unsafe.length) {
    if (state2.unsafe[index11].character === "\n" && patternInScope(state2.stack, state2.unsafe[index11])) {
      return /[ \t]/.test(info.before) ? "" : " ";
    }
  }
  return "\\\n";
}
var init_break = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/break.js"() {
    init_pattern_in_scope();
  }
});

// node_modules/longest-streak/index.js
function longestStreak(value, substring) {
  const source2 = String(value);
  let index11 = source2.indexOf(substring);
  let expected = index11;
  let count = 0;
  let max = 0;
  if (typeof substring !== "string") {
    throw new TypeError("Expected substring");
  }
  while (index11 !== -1) {
    if (index11 === expected) {
      if (++count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
    expected = index11 + substring.length;
    index11 = source2.indexOf(substring, expected);
  }
  return max;
}
var init_longest_streak = __esm({
  "node_modules/longest-streak/index.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function formatCodeAsIndented(node2, state2) {
  return Boolean(
    state2.options.fences === false && node2.value && // If there’s no info…
    !node2.lang && // And there’s a non-whitespace character…
    /[^ \r\n]/.test(node2.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node2.value)
  );
}
var init_format_code_as_indented = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function checkFence(state2) {
  const marker = state2.options.fence || "`";
  if (marker !== "`" && marker !== "~") {
    throw new Error(
      "Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`"
    );
  }
  return marker;
}
var init_check_fence = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-fence.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/code.js
function code(node2, _, state2, info) {
  const marker = checkFence(state2);
  const raw2 = node2.value || "";
  const suffix = marker === "`" ? "GraveAccent" : "Tilde";
  if (formatCodeAsIndented(node2, state2)) {
    const exit3 = state2.enter("codeIndented");
    const value2 = state2.indentLines(raw2, map3);
    exit3();
    return value2;
  }
  const tracker = state2.createTracker(info);
  const sequence = marker.repeat(Math.max(longestStreak(raw2, marker) + 1, 3));
  const exit2 = state2.enter("codeFenced");
  let value = tracker.move(sequence);
  if (node2.lang) {
    const subexit = state2.enter(`codeFencedLang${suffix}`);
    value += tracker.move(
      state2.safe(node2.lang, {
        before: value,
        after: " ",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  if (node2.lang && node2.meta) {
    const subexit = state2.enter(`codeFencedMeta${suffix}`);
    value += tracker.move(" ");
    value += tracker.move(
      state2.safe(node2.meta, {
        before: value,
        after: "\n",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  value += tracker.move("\n");
  if (raw2) {
    value += tracker.move(raw2 + "\n");
  }
  value += tracker.move(sequence);
  exit2();
  return value;
}
function map3(line, _, blank) {
  return (blank ? "" : "    ") + line;
}
var init_code = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/code.js"() {
    init_longest_streak();
    init_format_code_as_indented();
    init_check_fence();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function checkQuote(state2) {
  const marker = state2.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error(
      "Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`"
    );
  }
  return marker;
}
var init_check_quote = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-quote.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/definition.js
function definition2(node2, _, state2, info) {
  const quote = checkQuote(state2);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit2 = state2.enter("definition");
  let subexit = state2.enter("label");
  const tracker = state2.createTracker(info);
  let value = tracker.move("[");
  value += tracker.move(
    state2.safe(state2.associationId(node2), {
      before: value,
      after: "]",
      ...tracker.current()
    })
  );
  value += tracker.move("]: ");
  subexit();
  if (
    // If there’s no url, or…
    !node2.url || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state2.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state2.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state2.enter("destinationRaw");
    value += tracker.move(
      state2.safe(node2.url, {
        before: value,
        after: node2.title ? " " : "\n",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state2.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state2.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  exit2();
  return value;
}
var init_definition2 = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/definition.js"() {
    init_check_quote();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function checkEmphasis(state2) {
  const marker = state2.options.emphasis || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`"
    );
  }
  return marker;
}
var init_check_emphasis = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function encodeCharacterReference(code3) {
  return "&#x" + code3.toString(16).toUpperCase() + ";";
}
var init_encode_character_reference = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function encodeInfo(outside, inside, marker) {
  const outsideKind = classifyCharacter(outside);
  const insideKind = classifyCharacter(inside);
  if (outsideKind === void 0) {
    return insideKind === void 0 ? (
      // Letter inside:
      // we have to encode *both* letters for `_` as it is looser.
      // it already forms for `*` (and GFMs `~`).
      marker === "_" ? { inside: true, outside: true } : { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode both (letter, whitespace).
      { inside: true, outside: true }
    ) : (
      // Punctuation inside: encode outer (letter)
      { inside: false, outside: true }
    );
  }
  if (outsideKind === 1) {
    return insideKind === void 0 ? (
      // Letter inside: already forms.
      { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode both (whitespace).
      { inside: true, outside: true }
    ) : (
      // Punctuation inside: already forms.
      { inside: false, outside: false }
    );
  }
  return insideKind === void 0 ? (
    // Letter inside: already forms.
    { inside: false, outside: false }
  ) : insideKind === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: true, outside: false }
  ) : (
    // Punctuation inside: already forms.
    { inside: false, outside: false }
  );
}
var init_encode_info = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/encode-info.js"() {
    init_micromark_util_classify_character();
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
function emphasis(node2, _, state2, info) {
  const marker = checkEmphasis(state2);
  const exit2 = state2.enter("emphasis");
  const tracker = state2.createTracker(info);
  const before = tracker.move(marker);
  let between2 = tracker.move(
    state2.containerPhrasing(node2, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between2.charCodeAt(0);
  const open = encodeInfo(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );
  if (open.inside) {
    between2 = encodeCharacterReference(betweenHead) + between2.slice(1);
  }
  const betweenTail = between2.charCodeAt(between2.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between2 = between2.slice(0, -1) + encodeCharacterReference(betweenTail);
  }
  const after = tracker.move(marker);
  exit2();
  state2.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between2 + after;
}
function emphasisPeek(_, _1, state2) {
  return state2.options.emphasis || "*";
}
var init_emphasis = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/emphasis.js"() {
    init_check_emphasis();
    init_encode_character_reference();
    init_encode_info();
    emphasis.peek = emphasisPeek;
  }
});

// node_modules/unist-util-is/lib/index.js
function anyFactory(tests) {
  const checks2 = [];
  let index11 = -1;
  while (++index11 < tests.length) {
    checks2[index11] = convert(tests[index11]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index12 = -1;
    while (++index12 < checks2.length) {
      if (checks2[index12].apply(this, parameters)) return true;
    }
    return false;
  }
}
function propsFactory(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all3);
  function all3(node2) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node2
    );
    let key3;
    for (key3 in check) {
      if (nodeAsRecord[key3] !== checkAsRecord[key3]) return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node2) {
    return node2 && node2.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index11, parent) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index11 === "number" ? index11 : void 0,
        parent || void 0
      )
    );
  }
}
function ok() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}
var convert;
var init_lib5 = __esm({
  "node_modules/unist-util-is/lib/index.js"() {
    convert = // Note: overloads in JSDoc can’t yet use different `@template`s.
    /**
     * @type {(
     *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
     *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
     *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
     *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
     *   ((test?: Test) => Check)
     * )}
     */
    /**
     * @param {Test} [test]
     * @returns {Check}
     */
    function(test) {
      if (test === null || test === void 0) {
        return ok;
      }
      if (typeof test === "function") {
        return castFactory(test);
      }
      if (typeof test === "object") {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
      }
      if (typeof test === "string") {
        return typeFactory(test);
      }
      throw new Error("Expected function, string, or object as test");
    };
  }
});

// node_modules/unist-util-is/index.js
var init_unist_util_is = __esm({
  "node_modules/unist-util-is/index.js"() {
    init_lib5();
  }
});

// node_modules/unist-util-visit-parents/lib/color.js
function color(d) {
  return d;
}
var init_color = __esm({
  "node_modules/unist-util-visit-parents/lib/color.js"() {
  }
});

// node_modules/unist-util-visit-parents/lib/index.js
function visitParents(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is2 = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node2, index11, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node2 && typeof node2 === "object" ? node2 : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(node2.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = empty;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is2(node2, index11, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node2, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node2 && node2.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node2
        );
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty : [value];
}
var empty, CONTINUE, EXIT, SKIP;
var init_lib6 = __esm({
  "node_modules/unist-util-visit-parents/lib/index.js"() {
    init_unist_util_is();
    init_color();
    empty = [];
    CONTINUE = true;
    EXIT = false;
    SKIP = "skip";
  }
});

// node_modules/unist-util-visit-parents/index.js
var init_unist_util_visit_parents = __esm({
  "node_modules/unist-util-visit-parents/index.js"() {
    init_lib6();
  }
});

// node_modules/unist-util-visit/lib/index.js
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node2, parents) {
    const parent = parents[parents.length - 1];
    const index11 = parent ? parent.children.indexOf(node2) : void 0;
    return visitor(node2, index11, parent);
  }
}
var init_lib7 = __esm({
  "node_modules/unist-util-visit/lib/index.js"() {
    init_unist_util_visit_parents();
    init_unist_util_visit_parents();
  }
});

// node_modules/unist-util-visit/index.js
var init_unist_util_visit = __esm({
  "node_modules/unist-util-visit/index.js"() {
    init_lib7();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function formatHeadingAsSetext(node2, state2) {
  let literalWithBreak = false;
  visit(node2, function(node3) {
    if ("value" in node3 && /\r?\n|\r/.test(node3.value) || node3.type === "break") {
      literalWithBreak = true;
      return EXIT;
    }
  });
  return Boolean(
    (!node2.depth || node2.depth < 3) && toString(node2) && (state2.options.setext || literalWithBreak)
  );
}
var init_format_heading_as_setext = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js"() {
    init_unist_util_visit();
    init_mdast_util_to_string();
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/heading.js
function heading(node2, _, state2, info) {
  const rank = Math.max(Math.min(6, node2.depth || 1), 1);
  const tracker = state2.createTracker(info);
  if (formatHeadingAsSetext(node2, state2)) {
    const exit3 = state2.enter("headingSetext");
    const subexit2 = state2.enter("phrasing");
    const value2 = state2.containerPhrasing(node2, {
      ...tracker.current(),
      before: "\n",
      after: "\n"
    });
    subexit2();
    exit3();
    return value2 + "\n" + (rank === 1 ? "=" : "-").repeat(
      // The whole size…
      value2.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(value2.lastIndexOf("\r"), value2.lastIndexOf("\n")) + 1)
    );
  }
  const sequence = "#".repeat(rank);
  const exit2 = state2.enter("headingAtx");
  const subexit = state2.enter("phrasing");
  tracker.move(sequence + " ");
  let value = state2.containerPhrasing(node2, {
    before: "# ",
    after: "\n",
    ...tracker.current()
  });
  if (/^[\t ]/.test(value)) {
    value = encodeCharacterReference(value.charCodeAt(0)) + value.slice(1);
  }
  value = value ? sequence + " " + value : sequence;
  if (state2.options.closeAtx) {
    value += " " + sequence;
  }
  subexit();
  exit2();
  return value;
}
var init_heading = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/heading.js"() {
    init_encode_character_reference();
    init_format_heading_as_setext();
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/html.js
function html2(node2) {
  return node2.value || "";
}
function htmlPeek() {
  return "<";
}
var init_html2 = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/html.js"() {
    html2.peek = htmlPeek;
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/image.js
function image(node2, _, state2, info) {
  const quote = checkQuote(state2);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit2 = state2.enter("image");
  let subexit = state2.enter("label");
  const tracker = state2.createTracker(info);
  let value = tracker.move("![");
  value += tracker.move(
    state2.safe(node2.alt, { before: value, after: "]", ...tracker.current() })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node2.url && node2.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state2.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state2.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state2.enter("destinationRaw");
    value += tracker.move(
      state2.safe(node2.url, {
        before: value,
        after: node2.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state2.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state2.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit2();
  return value;
}
function imagePeek() {
  return "!";
}
var init_image = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/image.js"() {
    init_check_quote();
    image.peek = imagePeek;
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
function imageReference(node2, _, state2, info) {
  const type = node2.referenceType;
  const exit2 = state2.enter("imageReference");
  let subexit = state2.enter("label");
  const tracker = state2.createTracker(info);
  let value = tracker.move("![");
  const alt = state2.safe(node2.alt, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(alt + "][");
  subexit();
  const stack = state2.stack;
  state2.stack = [];
  subexit = state2.enter("reference");
  const reference = state2.safe(state2.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state2.stack = stack;
  exit2();
  if (type === "full" || !alt || alt !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function imageReferencePeek() {
  return "!";
}
var init_image_reference = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/image-reference.js"() {
    imageReference.peek = imageReferencePeek;
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
function inlineCode(node2, _, state2) {
  let value = node2.value || "";
  let sequence = "`";
  let index11 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index11 < state2.unsafe.length) {
    const pattern2 = state2.unsafe[index11];
    const expression = state2.compilePattern(pattern2);
    let match;
    if (!pattern2.atBreak) continue;
    while (match = expression.exec(value)) {
      let position3 = match.index;
      if (value.charCodeAt(position3) === 10 && value.charCodeAt(position3 - 1) === 13) {
        position3--;
      }
      value = value.slice(0, position3) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}
var init_inline_code = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/inline-code.js"() {
    inlineCode.peek = inlineCodePeek;
  }
});

// node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function formatLinkAsAutolink(node2, state2) {
  const raw2 = toString(node2);
  return Boolean(
    !state2.options.resourceLink && // If there’s a url…
    node2.url && // And there’s a no title…
    !node2.title && // And the content of `node` is a single text node…
    node2.children && node2.children.length === 1 && node2.children[0].type === "text" && // And if the url is the same as the content…
    (raw2 === node2.url || "mailto:" + raw2 === node2.url) && // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(node2.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work), space, or angle brackets…
    !/[\0- <>\u007F]/.test(node2.url)
  );
}
var init_format_link_as_autolink = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js"() {
    init_mdast_util_to_string();
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/link.js
function link(node2, _, state2, info) {
  const quote = checkQuote(state2);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const tracker = state2.createTracker(info);
  let exit2;
  let subexit;
  if (formatLinkAsAutolink(node2, state2)) {
    const stack = state2.stack;
    state2.stack = [];
    exit2 = state2.enter("autolink");
    let value2 = tracker.move("<");
    value2 += tracker.move(
      state2.containerPhrasing(node2, {
        before: value2,
        after: ">",
        ...tracker.current()
      })
    );
    value2 += tracker.move(">");
    exit2();
    state2.stack = stack;
    return value2;
  }
  exit2 = state2.enter("link");
  subexit = state2.enter("label");
  let value = tracker.move("[");
  value += tracker.move(
    state2.containerPhrasing(node2, {
      before: value,
      after: "](",
      ...tracker.current()
    })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node2.url && node2.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state2.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state2.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state2.enter("destinationRaw");
    value += tracker.move(
      state2.safe(node2.url, {
        before: value,
        after: node2.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state2.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state2.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit2();
  return value;
}
function linkPeek(node2, _, state2) {
  return formatLinkAsAutolink(node2, state2) ? "<" : "[";
}
var init_link = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/link.js"() {
    init_check_quote();
    init_format_link_as_autolink();
    link.peek = linkPeek;
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
function linkReference(node2, _, state2, info) {
  const type = node2.referenceType;
  const exit2 = state2.enter("linkReference");
  let subexit = state2.enter("label");
  const tracker = state2.createTracker(info);
  let value = tracker.move("[");
  const text8 = state2.containerPhrasing(node2, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(text8 + "][");
  subexit();
  const stack = state2.stack;
  state2.stack = [];
  subexit = state2.enter("reference");
  const reference = state2.safe(state2.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state2.stack = stack;
  exit2();
  if (type === "full" || !text8 || text8 !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function linkReferencePeek() {
  return "[";
}
var init_link_reference = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/link-reference.js"() {
    linkReference.peek = linkReferencePeek;
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function checkBullet(state2) {
  const marker = state2.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  }
  return marker;
}
var init_check_bullet = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-bullet.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function checkBulletOther(state2) {
  const bullet = checkBullet(state2);
  const bulletOther = state2.options.bulletOther;
  if (!bulletOther) {
    return bullet === "*" ? "-" : "*";
  }
  if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
    throw new Error(
      "Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  }
  if (bulletOther === bullet) {
    throw new Error(
      "Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different"
    );
  }
  return bulletOther;
}
var init_check_bullet_other = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js"() {
    init_check_bullet();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function checkBulletOrdered(state2) {
  const marker = state2.options.bulletOrdered || ".";
  if (marker !== "." && marker !== ")") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  }
  return marker;
}
var init_check_bullet_ordered = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function checkRule(state2) {
  const marker = state2.options.rule || "*";
  if (marker !== "*" && marker !== "-" && marker !== "_") {
    throw new Error(
      "Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  }
  return marker;
}
var init_check_rule = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-rule.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/list.js
function list3(node2, parent, state2, info) {
  const exit2 = state2.enter("list");
  const bulletCurrent = state2.bulletCurrent;
  let bullet = node2.ordered ? checkBulletOrdered(state2) : checkBullet(state2);
  const bulletOther = node2.ordered ? bullet === "." ? ")" : "." : checkBulletOther(state2);
  let useDifferentMarker = parent && state2.bulletLastUsed ? bullet === state2.bulletLastUsed : false;
  if (!node2.ordered) {
    const firstListItem = node2.children ? node2.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (bullet === "*" || bullet === "-") && // Empty first list item:
      firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
      state2.stack[state2.stack.length - 1] === "list" && state2.stack[state2.stack.length - 2] === "listItem" && state2.stack[state2.stack.length - 3] === "list" && state2.stack[state2.stack.length - 4] === "listItem" && // That are each the first child.
      state2.indexStack[state2.indexStack.length - 1] === 0 && state2.indexStack[state2.indexStack.length - 2] === 0 && state2.indexStack[state2.indexStack.length - 3] === 0
    ) {
      useDifferentMarker = true;
    }
    if (checkRule(state2) === bullet && firstListItem) {
      let index11 = -1;
      while (++index11 < node2.children.length) {
        const item = node2.children[index11];
        if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
          useDifferentMarker = true;
          break;
        }
      }
    }
  }
  if (useDifferentMarker) {
    bullet = bulletOther;
  }
  state2.bulletCurrent = bullet;
  const value = state2.containerFlow(node2, info);
  state2.bulletLastUsed = bullet;
  state2.bulletCurrent = bulletCurrent;
  exit2();
  return value;
}
var init_list2 = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/list.js"() {
    init_check_bullet();
    init_check_bullet_other();
    init_check_bullet_ordered();
    init_check_rule();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function checkListItemIndent(state2) {
  const style = state2.options.listItemIndent || "one";
  if (style !== "tab" && style !== "one" && style !== "mixed") {
    throw new Error(
      "Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  }
  return style;
}
var init_check_list_item_indent = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem(node2, parent, state2, info) {
  const listItemIndent = checkListItemIndent(state2);
  let bullet = state2.bulletCurrent || checkBullet(state2);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state2.options.incrementListMarker === false ? 0 : parent.children.indexOf(node2)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node2.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = state2.createTracker(info);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit2 = state2.enter("listItem");
  const value = state2.indentLines(
    state2.containerFlow(node2, tracker.current()),
    map4
  );
  exit2();
  return value;
  function map4(line, index11, blank) {
    if (index11) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}
var init_list_item = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/list-item.js"() {
    init_check_bullet();
    init_check_list_item_indent();
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function paragraph(node2, _, state2, info) {
  const exit2 = state2.enter("paragraph");
  const subexit = state2.enter("phrasing");
  const value = state2.containerPhrasing(node2, info);
  subexit();
  exit2();
  return value;
}
var init_paragraph = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/paragraph.js"() {
  }
});

// node_modules/mdast-util-phrasing/lib/index.js
var phrasing;
var init_lib8 = __esm({
  "node_modules/mdast-util-phrasing/lib/index.js"() {
    init_unist_util_is();
    phrasing = /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
    convert([
      "break",
      "delete",
      "emphasis",
      // To do: next major: removed since footnotes were added to GFM.
      "footnote",
      "footnoteReference",
      "image",
      "imageReference",
      "inlineCode",
      // Enabled by `mdast-util-math`:
      "inlineMath",
      "link",
      "linkReference",
      // Enabled by `mdast-util-mdx`:
      "mdxJsxTextElement",
      // Enabled by `mdast-util-mdx`:
      "mdxTextExpression",
      "strong",
      "text",
      // Enabled by `mdast-util-directive`:
      "textDirective"
    ]);
  }
});

// node_modules/mdast-util-phrasing/index.js
var init_mdast_util_phrasing = __esm({
  "node_modules/mdast-util-phrasing/index.js"() {
    init_lib8();
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/root.js
function root2(node2, _, state2, info) {
  const hasPhrasing = node2.children.some(function(d) {
    return phrasing(d);
  });
  const container = hasPhrasing ? state2.containerPhrasing : state2.containerFlow;
  return container.call(state2, node2, info);
}
var init_root = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/root.js"() {
    init_mdast_util_phrasing();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function checkStrong(state2) {
  const marker = state2.options.strong || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`"
    );
  }
  return marker;
}
var init_check_strong = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-strong.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/strong.js
function strong(node2, _, state2, info) {
  const marker = checkStrong(state2);
  const exit2 = state2.enter("strong");
  const tracker = state2.createTracker(info);
  const before = tracker.move(marker + marker);
  let between2 = tracker.move(
    state2.containerPhrasing(node2, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between2.charCodeAt(0);
  const open = encodeInfo(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );
  if (open.inside) {
    between2 = encodeCharacterReference(betweenHead) + between2.slice(1);
  }
  const betweenTail = between2.charCodeAt(between2.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between2 = between2.slice(0, -1) + encodeCharacterReference(betweenTail);
  }
  const after = tracker.move(marker + marker);
  exit2();
  state2.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between2 + after;
}
function strongPeek(_, _1, state2) {
  return state2.options.strong || "*";
}
var init_strong = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/strong.js"() {
    init_check_strong();
    init_encode_character_reference();
    init_encode_info();
    strong.peek = strongPeek;
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/text.js
function text4(node2, _, state2, info) {
  return state2.safe(node2.value, info);
}
var init_text2 = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/text.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function checkRuleRepetition(state2) {
  const repetition = state2.options.ruleRepetition || 3;
  if (repetition < 3) {
    throw new Error(
      "Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more"
    );
  }
  return repetition;
}
var init_check_rule_repetition = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function thematicBreak2(_, _1, state2) {
  const value = (checkRule(state2) + (state2.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state2));
  return state2.options.ruleSpaces ? value.slice(0, -1) : value;
}
var init_thematic_break2 = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js"() {
    init_check_rule_repetition();
    init_check_rule();
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/index.js
var handle;
var init_handle = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/index.js"() {
    init_blockquote();
    init_break();
    init_code();
    init_definition2();
    init_emphasis();
    init_heading();
    init_html2();
    init_image();
    init_image_reference();
    init_inline_code();
    init_link();
    init_link_reference();
    init_list2();
    init_list_item();
    init_paragraph();
    init_root();
    init_strong();
    init_text2();
    init_thematic_break2();
    handle = {
      blockquote,
      break: hardBreak,
      code,
      definition: definition2,
      emphasis,
      hardBreak,
      heading,
      html: html2,
      image,
      imageReference,
      inlineCode,
      link,
      linkReference,
      list: list3,
      listItem,
      paragraph,
      root: root2,
      strong,
      text: text4,
      thematicBreak: thematicBreak2
    };
  }
});

// node_modules/mdast-util-to-markdown/lib/join.js
function joinDefaults(left, right, parent, state2) {
  if (right.type === "code" && formatCodeAsIndented(right, state2) && (left.type === "list" || left.type === right.type && formatCodeAsIndented(left, state2))) {
    return false;
  }
  if ("spread" in parent && typeof parent.spread === "boolean") {
    if (left.type === "paragraph" && // Two paragraphs.
    (left.type === right.type || right.type === "definition" || // Paragraph followed by a setext heading.
    right.type === "heading" && formatHeadingAsSetext(right, state2))) {
      return;
    }
    return parent.spread ? 1 : 0;
  }
}
var join;
var init_join = __esm({
  "node_modules/mdast-util-to-markdown/lib/join.js"() {
    init_format_code_as_indented();
    init_format_heading_as_setext();
    join = [joinDefaults];
  }
});

// node_modules/mdast-util-to-markdown/lib/unsafe.js
var fullPhrasingSpans, unsafe;
var init_unsafe = __esm({
  "node_modules/mdast-util-to-markdown/lib/unsafe.js"() {
    fullPhrasingSpans = [
      "autolink",
      "destinationLiteral",
      "destinationRaw",
      "reference",
      "titleQuote",
      "titleApostrophe"
    ];
    unsafe = [
      { character: "	", after: "[\\r\\n]", inConstruct: "phrasing" },
      { character: "	", before: "[\\r\\n]", inConstruct: "phrasing" },
      {
        character: "	",
        inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
      },
      {
        character: "\r",
        inConstruct: [
          "codeFencedLangGraveAccent",
          "codeFencedLangTilde",
          "codeFencedMetaGraveAccent",
          "codeFencedMetaTilde",
          "destinationLiteral",
          "headingAtx"
        ]
      },
      {
        character: "\n",
        inConstruct: [
          "codeFencedLangGraveAccent",
          "codeFencedLangTilde",
          "codeFencedMetaGraveAccent",
          "codeFencedMetaTilde",
          "destinationLiteral",
          "headingAtx"
        ]
      },
      { character: " ", after: "[\\r\\n]", inConstruct: "phrasing" },
      { character: " ", before: "[\\r\\n]", inConstruct: "phrasing" },
      {
        character: " ",
        inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
      },
      // An exclamation mark can start an image, if it is followed by a link or
      // a link reference.
      {
        character: "!",
        after: "\\[",
        inConstruct: "phrasing",
        notInConstruct: fullPhrasingSpans
      },
      // A quote can break out of a title.
      { character: '"', inConstruct: "titleQuote" },
      // A number sign could start an ATX heading if it starts a line.
      { atBreak: true, character: "#" },
      { character: "#", inConstruct: "headingAtx", after: "(?:[\r\n]|$)" },
      // Dollar sign and percentage are not used in markdown.
      // An ampersand could start a character reference.
      { character: "&", after: "[#A-Za-z]", inConstruct: "phrasing" },
      // An apostrophe can break out of a title.
      { character: "'", inConstruct: "titleApostrophe" },
      // A left paren could break out of a destination raw.
      { character: "(", inConstruct: "destinationRaw" },
      // A left paren followed by `]` could make something into a link or image.
      {
        before: "\\]",
        character: "(",
        inConstruct: "phrasing",
        notInConstruct: fullPhrasingSpans
      },
      // A right paren could start a list item or break out of a destination
      // raw.
      { atBreak: true, before: "\\d+", character: ")" },
      { character: ")", inConstruct: "destinationRaw" },
      // An asterisk can start thematic breaks, list items, emphasis, strong.
      { atBreak: true, character: "*", after: "(?:[ 	\r\n*])" },
      { character: "*", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
      // A plus sign could start a list item.
      { atBreak: true, character: "+", after: "(?:[ 	\r\n])" },
      // A dash can start thematic breaks, list items, and setext heading
      // underlines.
      { atBreak: true, character: "-", after: "(?:[ 	\r\n-])" },
      // A dot could start a list item.
      { atBreak: true, before: "\\d+", character: ".", after: "(?:[ 	\r\n]|$)" },
      // Slash, colon, and semicolon are not used in markdown for constructs.
      // A less than can start html (flow or text) or an autolink.
      // HTML could start with an exclamation mark (declaration, cdata, comment),
      // slash (closing tag), question mark (instruction), or a letter (tag).
      // An autolink also starts with a letter.
      // Finally, it could break out of a destination literal.
      { atBreak: true, character: "<", after: "[!/?A-Za-z]" },
      {
        character: "<",
        after: "[!/?A-Za-z]",
        inConstruct: "phrasing",
        notInConstruct: fullPhrasingSpans
      },
      { character: "<", inConstruct: "destinationLiteral" },
      // An equals to can start setext heading underlines.
      { atBreak: true, character: "=" },
      // A greater than can start block quotes and it can break out of a
      // destination literal.
      { atBreak: true, character: ">" },
      { character: ">", inConstruct: "destinationLiteral" },
      // Question mark and at sign are not used in markdown for constructs.
      // A left bracket can start definitions, references, labels,
      { atBreak: true, character: "[" },
      { character: "[", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
      { character: "[", inConstruct: ["label", "reference"] },
      // A backslash can start an escape (when followed by punctuation) or a
      // hard break (when followed by an eol).
      // Note: typical escapes are handled in `safe`!
      { character: "\\", after: "[\\r\\n]", inConstruct: "phrasing" },
      // A right bracket can exit labels.
      { character: "]", inConstruct: ["label", "reference"] },
      // Caret is not used in markdown for constructs.
      // An underscore can start emphasis, strong, or a thematic break.
      { atBreak: true, character: "_" },
      { character: "_", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
      // A grave accent can start code (fenced or text), or it can break out of
      // a grave accent code fence.
      { atBreak: true, character: "`" },
      {
        character: "`",
        inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
      },
      { character: "`", inConstruct: "phrasing", notInConstruct: fullPhrasingSpans },
      // Left brace, vertical bar, right brace are not used in markdown for
      // constructs.
      // A tilde can start code (fenced).
      { atBreak: true, character: "~" }
    ];
  }
});

// node_modules/mdast-util-to-markdown/lib/util/association.js
function association(node2) {
  if (node2.label || !node2.identifier) {
    return node2.label || "";
  }
  return decodeString(node2.identifier);
}
var init_association = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/association.js"() {
    init_micromark_util_decode_string();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/compile-pattern.js
function compilePattern(pattern2) {
  if (!pattern2._compiled) {
    const before = (pattern2.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern2.before ? "(?:" + pattern2.before + ")" : "");
    pattern2._compiled = new RegExp(
      (before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern2.character) ? "\\" : "") + pattern2.character + (pattern2.after ? "(?:" + pattern2.after + ")" : ""),
      "g"
    );
  }
  return pattern2._compiled;
}
var init_compile_pattern = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/compile-pattern.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
function containerPhrasing(parent, state2, info) {
  const indexStack = state2.indexStack;
  const children2 = parent.children || [];
  const results = [];
  let index11 = -1;
  let before = info.before;
  let encodeAfter;
  indexStack.push(-1);
  let tracker = state2.createTracker(info);
  while (++index11 < children2.length) {
    const child = children2[index11];
    let after;
    indexStack[indexStack.length - 1] = index11;
    if (index11 + 1 < children2.length) {
      let handle3 = state2.handle.handlers[children2[index11 + 1].type];
      if (handle3 && handle3.peek) handle3 = handle3.peek;
      after = handle3 ? handle3(children2[index11 + 1], parent, state2, {
        before: "",
        after: "",
        ...tracker.current()
      }).charAt(0) : "";
    } else {
      after = info.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(
        /(\r?\n|\r)$/,
        " "
      );
      before = " ";
      tracker = state2.createTracker(info);
      tracker.move(results.join(""));
    }
    let value = state2.handle(child, parent, state2, {
      ...tracker.current(),
      after,
      before
    });
    if (encodeAfter && encodeAfter === value.slice(0, 1)) {
      value = encodeCharacterReference(encodeAfter.charCodeAt(0)) + value.slice(1);
    }
    const encodingInfo = state2.attentionEncodeSurroundingInfo;
    state2.attentionEncodeSurroundingInfo = void 0;
    encodeAfter = void 0;
    if (encodingInfo) {
      if (results.length > 0 && encodingInfo.before && before === results[results.length - 1].slice(-1)) {
        results[results.length - 1] = results[results.length - 1].slice(0, -1) + encodeCharacterReference(before.charCodeAt(0));
      }
      if (encodingInfo.after) encodeAfter = after;
    }
    tracker.move(value);
    results.push(value);
    before = value.slice(-1);
  }
  indexStack.pop();
  return results.join("");
}
var init_container_phrasing = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js"() {
    init_encode_character_reference();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/container-flow.js
function containerFlow(parent, state2, info) {
  const indexStack = state2.indexStack;
  const children2 = parent.children || [];
  const tracker = state2.createTracker(info);
  const results = [];
  let index11 = -1;
  indexStack.push(-1);
  while (++index11 < children2.length) {
    const child = children2[index11];
    indexStack[indexStack.length - 1] = index11;
    results.push(
      tracker.move(
        state2.handle(child, parent, state2, {
          before: "\n",
          after: "\n",
          ...tracker.current()
        })
      )
    );
    if (child.type !== "list") {
      state2.bulletLastUsed = void 0;
    }
    if (index11 < children2.length - 1) {
      results.push(
        tracker.move(between(child, children2[index11 + 1], parent, state2))
      );
    }
  }
  indexStack.pop();
  return results.join("");
}
function between(left, right, parent, state2) {
  let index11 = state2.join.length;
  while (index11--) {
    const result = state2.join[index11](left, right, parent, state2);
    if (result === true || result === 1) {
      break;
    }
    if (typeof result === "number") {
      return "\n".repeat(1 + result);
    }
    if (result === false) {
      return "\n\n<!---->\n\n";
    }
  }
  return "\n\n";
}
var init_container_flow = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/container-flow.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
function indentLines(value, map4) {
  const result = [];
  let start = 0;
  let line = 0;
  let match;
  while (match = eol.exec(value)) {
    one3(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }
  one3(value.slice(start));
  return result.join("");
  function one3(value2) {
    result.push(map4(value2, line, !value2));
  }
}
var eol;
var init_indent_lines = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/indent-lines.js"() {
    eol = /\r?\n|\r/g;
  }
});

// node_modules/mdast-util-to-markdown/lib/util/safe.js
function safe(state2, input, config) {
  const value = (config.before || "") + (input || "") + (config.after || "");
  const positions = [];
  const result = [];
  const infos = {};
  let index11 = -1;
  while (++index11 < state2.unsafe.length) {
    const pattern2 = state2.unsafe[index11];
    if (!patternInScope(state2.stack, pattern2)) {
      continue;
    }
    const expression = state2.compilePattern(pattern2);
    let match;
    while (match = expression.exec(value)) {
      const before = "before" in pattern2 || Boolean(pattern2.atBreak);
      const after = "after" in pattern2;
      const position3 = match.index + (before ? match[1].length : 0);
      if (positions.includes(position3)) {
        if (infos[position3].before && !before) {
          infos[position3].before = false;
        }
        if (infos[position3].after && !after) {
          infos[position3].after = false;
        }
      } else {
        positions.push(position3);
        infos[position3] = { before, after };
      }
    }
  }
  positions.sort(numerical);
  let start = config.before ? config.before.length : 0;
  const end = value.length - (config.after ? config.after.length : 0);
  index11 = -1;
  while (++index11 < positions.length) {
    const position3 = positions[index11];
    if (position3 < start || position3 >= end) {
      continue;
    }
    if (position3 + 1 < end && positions[index11 + 1] === position3 + 1 && infos[position3].after && !infos[position3 + 1].before && !infos[position3 + 1].after || positions[index11 - 1] === position3 - 1 && infos[position3].before && !infos[position3 - 1].before && !infos[position3 - 1].after) {
      continue;
    }
    if (start !== position3) {
      result.push(escapeBackslashes(value.slice(start, position3), "\\"));
    }
    start = position3;
    if (/[!-/:-@[-`{-~]/.test(value.charAt(position3)) && (!config.encode || !config.encode.includes(value.charAt(position3)))) {
      result.push("\\");
    } else {
      result.push(encodeCharacterReference(value.charCodeAt(position3)));
      start++;
    }
  }
  result.push(escapeBackslashes(value.slice(start, end), config.after));
  return result.join("");
}
function numerical(a, b) {
  return a - b;
}
function escapeBackslashes(value, after) {
  const expression = /\\(?=[!-/:-@[-`{-~])/g;
  const positions = [];
  const results = [];
  const whole = value + after;
  let index11 = -1;
  let start = 0;
  let match;
  while (match = expression.exec(whole)) {
    positions.push(match.index);
  }
  while (++index11 < positions.length) {
    if (start !== positions[index11]) {
      results.push(value.slice(start, positions[index11]));
    }
    results.push("\\");
    start = positions[index11];
  }
  results.push(value.slice(start));
  return results.join("");
}
var init_safe = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/safe.js"() {
    init_encode_character_reference();
    init_pattern_in_scope();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/track.js
function track(config) {
  const options2 = config || {};
  const now = options2.now || {};
  let lineShift = options2.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(input) {
    const value = input || "";
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}
var init_track = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/track.js"() {
  }
});

// node_modules/mdast-util-to-markdown/lib/index.js
function toMarkdown(tree, options2) {
  const settings = options2 || {};
  const state2 = {
    associationId: association,
    containerPhrasing: containerPhrasingBound,
    containerFlow: containerFlowBound,
    createTracker: track,
    compilePattern,
    enter,
    // @ts-expect-error: GFM / frontmatter are typed in `mdast` but not defined
    // here.
    handlers: { ...handle },
    // @ts-expect-error: add `handle` in a second.
    handle: void 0,
    indentLines,
    indexStack: [],
    join: [...join],
    options: {},
    safe: safeBound,
    stack: [],
    unsafe: [...unsafe]
  };
  configure2(state2, settings);
  if (state2.options.tightDefinitions) {
    state2.join.push(joinDefinition);
  }
  state2.handle = zwitch("type", {
    invalid,
    unknown,
    handlers: state2.handlers
  });
  let result = state2.handle(tree, void 0, state2, {
    before: "\n",
    after: "\n",
    now: { line: 1, column: 1 },
    lineShift: 0
  });
  if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) {
    result += "\n";
  }
  return result;
  function enter(name) {
    state2.stack.push(name);
    return exit2;
    function exit2() {
      state2.stack.pop();
    }
  }
}
function invalid(value) {
  throw new Error("Cannot handle value `" + value + "`, expected node");
}
function unknown(value) {
  const node2 = (
    /** @type {Nodes} */
    value
  );
  throw new Error("Cannot handle unknown node `" + node2.type + "`");
}
function joinDefinition(left, right) {
  if (left.type === "definition" && left.type === right.type) {
    return 0;
  }
}
function containerPhrasingBound(parent, info) {
  return containerPhrasing(parent, this, info);
}
function containerFlowBound(parent, info) {
  return containerFlow(parent, this, info);
}
function safeBound(value, config) {
  return safe(this, value, config);
}
var init_lib9 = __esm({
  "node_modules/mdast-util-to-markdown/lib/index.js"() {
    init_zwitch();
    init_configure();
    init_handle();
    init_join();
    init_unsafe();
    init_association();
    init_compile_pattern();
    init_container_phrasing();
    init_container_flow();
    init_indent_lines();
    init_safe();
    init_track();
  }
});

// node_modules/mdast-util-to-markdown/index.js
var init_mdast_util_to_markdown = __esm({
  "node_modules/mdast-util-to-markdown/index.js"() {
    init_lib9();
  }
});

// node_modules/remark-stringify/lib/index.js
function remarkStringify(options2) {
  const self2 = this;
  self2.compiler = compiler2;
  function compiler2(tree) {
    return toMarkdown(tree, {
      ...self2.data("settings"),
      ...options2,
      // Note: this option is not in the readme.
      // The goal is for it to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self2.data("toMarkdownExtensions") || []
    });
  }
}
var init_lib10 = __esm({
  "node_modules/remark-stringify/lib/index.js"() {
    init_mdast_util_to_markdown();
  }
});

// node_modules/remark-stringify/index.js
var init_remark_stringify = __esm({
  "node_modules/remark-stringify/index.js"() {
    init_lib10();
  }
});

// node_modules/bail/index.js
function bail(error2) {
  if (error2) {
    throw error2;
  }
}
var init_bail = __esm({
  "node_modules/bail/index.js"() {
  }
});

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject2 = function isPlainObject3(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key3;
      for (key3 in obj) {
      }
      return typeof key3 === "undefined" || hasOwn.call(obj, key3);
    };
    var setProperty = function setProperty2(target, options2) {
      if (defineProperty && options2.name === "__proto__") {
        defineProperty(target, options2.name, {
          enumerable: true,
          configurable: true,
          value: options2.newValue,
          writable: true
        });
      } else {
        target[options2.name] = options2.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module.exports = function extend2() {
      var options2, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options2 = arguments[i];
        if (options2 != null) {
          for (name in options2) {
            src = getProperty(target, name);
            copy = getProperty(options2, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject2(src) ? src : {};
                }
                setProperty(target, { name, newValue: extend2(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// node_modules/devlop/lib/default.js
function ok2() {
}
var init_default = __esm({
  "node_modules/devlop/lib/default.js"() {
  }
});

// node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
var init_is_plain_obj = __esm({
  "node_modules/is-plain-obj/index.js"() {
  }
});

// node_modules/trough/lib/index.js
function trough() {
  const fns = [];
  const pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error2, ...output) {
      const fn = fns[++middlewareIndex];
      let index11 = -1;
      if (error2) {
        callback(error2);
        return;
      }
      while (++index11 < values.length) {
        if (output[index11] === null || output[index11] === void 0) {
          output[index11] = values[index11];
        }
      }
      values = output;
      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError(
        "Expected `middelware` to be a function, not " + middelware
      );
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error2) {
      const exception = (
        /** @type {Error} */
        error2
      );
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result && result.then && typeof result.then === "function") {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error2, ...output) {
    if (!called) {
      called = true;
      callback(error2, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}
var init_lib11 = __esm({
  "node_modules/trough/lib/index.js"() {
  }
});

// node_modules/trough/index.js
var init_trough = __esm({
  "node_modules/trough/index.js"() {
    init_lib11();
  }
});

// node_modules/vfile-message/lib/index.js
var VFileMessage;
var init_lib12 = __esm({
  "node_modules/vfile-message/lib/index.js"() {
    init_unist_util_stringify_position();
    VFileMessage = class extends Error {
      /**
       * Create a message for `reason`.
       *
       * > 🪦 **Note**: also has obsolete signatures.
       *
       * @overload
       * @param {string} reason
       * @param {Options | null | undefined} [options]
       * @returns
       *
       * @overload
       * @param {string} reason
       * @param {Node | NodeLike | null | undefined} parent
       * @param {string | null | undefined} [origin]
       * @returns
       *
       * @overload
       * @param {string} reason
       * @param {Point | Position | null | undefined} place
       * @param {string | null | undefined} [origin]
       * @returns
       *
       * @overload
       * @param {string} reason
       * @param {string | null | undefined} [origin]
       * @returns
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {Node | NodeLike | null | undefined} parent
       * @param {string | null | undefined} [origin]
       * @returns
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {Point | Position | null | undefined} place
       * @param {string | null | undefined} [origin]
       * @returns
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {string | null | undefined} [origin]
       * @returns
       *
       * @param {Error | VFileMessage | string} causeOrReason
       *   Reason for message, should use markdown.
       * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
       *   Configuration (optional).
       * @param {string | null | undefined} [origin]
       *   Place in code where the message originates (example:
       *   `'my-package:my-rule'` or `'my-rule'`).
       * @returns
       *   Instance of `VFileMessage`.
       */
      // eslint-disable-next-line complexity
      constructor(causeOrReason, optionsOrParentOrPlace, origin) {
        super();
        if (typeof optionsOrParentOrPlace === "string") {
          origin = optionsOrParentOrPlace;
          optionsOrParentOrPlace = void 0;
        }
        let reason = "";
        let options2 = {};
        let legacyCause = false;
        if (optionsOrParentOrPlace) {
          if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) {
            options2 = { place: optionsOrParentOrPlace };
          } else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) {
            options2 = { place: optionsOrParentOrPlace };
          } else if ("type" in optionsOrParentOrPlace) {
            options2 = {
              ancestors: [optionsOrParentOrPlace],
              place: optionsOrParentOrPlace.position
            };
          } else {
            options2 = { ...optionsOrParentOrPlace };
          }
        }
        if (typeof causeOrReason === "string") {
          reason = causeOrReason;
        } else if (!options2.cause && causeOrReason) {
          legacyCause = true;
          reason = causeOrReason.message;
          options2.cause = causeOrReason;
        }
        if (!options2.ruleId && !options2.source && typeof origin === "string") {
          const index11 = origin.indexOf(":");
          if (index11 === -1) {
            options2.ruleId = origin;
          } else {
            options2.source = origin.slice(0, index11);
            options2.ruleId = origin.slice(index11 + 1);
          }
        }
        if (!options2.place && options2.ancestors && options2.ancestors) {
          const parent = options2.ancestors[options2.ancestors.length - 1];
          if (parent) {
            options2.place = parent.position;
          }
        }
        const start = options2.place && "start" in options2.place ? options2.place.start : options2.place;
        this.ancestors = options2.ancestors || void 0;
        this.cause = options2.cause || void 0;
        this.column = start ? start.column : void 0;
        this.fatal = void 0;
        this.file;
        this.message = reason;
        this.line = start ? start.line : void 0;
        this.name = stringifyPosition(options2.place) || "1:1";
        this.place = options2.place || void 0;
        this.reason = this.message;
        this.ruleId = options2.ruleId || void 0;
        this.source = options2.source || void 0;
        this.stack = legacyCause && options2.cause && typeof options2.cause.stack === "string" ? options2.cause.stack : "";
        this.actual;
        this.expected;
        this.note;
        this.url;
      }
    };
    VFileMessage.prototype.file = "";
    VFileMessage.prototype.name = "";
    VFileMessage.prototype.reason = "";
    VFileMessage.prototype.message = "";
    VFileMessage.prototype.stack = "";
    VFileMessage.prototype.column = void 0;
    VFileMessage.prototype.line = void 0;
    VFileMessage.prototype.ancestors = void 0;
    VFileMessage.prototype.cause = void 0;
    VFileMessage.prototype.fatal = void 0;
    VFileMessage.prototype.place = void 0;
    VFileMessage.prototype.ruleId = void 0;
    VFileMessage.prototype.source = void 0;
  }
});

// node_modules/vfile-message/index.js
var init_vfile_message = __esm({
  "node_modules/vfile-message/index.js"() {
    init_lib12();
  }
});

// node_modules/vfile/lib/minpath.browser.js
function basename(path, extname2) {
  if (extname2 !== void 0 && typeof extname2 !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath(path);
  let start = 0;
  let end = -1;
  let index11 = path.length;
  let seenNonSlash;
  if (extname2 === void 0 || extname2.length === 0 || extname2.length > path.length) {
    while (index11--) {
      if (path.codePointAt(index11) === 47) {
        if (seenNonSlash) {
          start = index11 + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index11 + 1;
      }
    }
    return end < 0 ? "" : path.slice(start, end);
  }
  if (extname2 === path) {
    return "";
  }
  let firstNonSlashEnd = -1;
  let extnameIndex = extname2.length - 1;
  while (index11--) {
    if (path.codePointAt(index11) === 47) {
      if (seenNonSlash) {
        start = index11 + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index11 + 1;
      }
      if (extnameIndex > -1) {
        if (path.codePointAt(index11) === extname2.codePointAt(extnameIndex--)) {
          if (extnameIndex < 0) {
            end = index11;
          }
        } else {
          extnameIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path.length;
  }
  return path.slice(start, end);
}
function dirname(path) {
  assertPath(path);
  if (path.length === 0) {
    return ".";
  }
  let end = -1;
  let index11 = path.length;
  let unmatchedSlash;
  while (--index11) {
    if (path.codePointAt(index11) === 47) {
      if (unmatchedSlash) {
        end = index11;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0 ? path.codePointAt(0) === 47 ? "/" : "." : end === 1 && path.codePointAt(0) === 47 ? "//" : path.slice(0, end);
}
function extname(path) {
  assertPath(path);
  let index11 = path.length;
  let end = -1;
  let startPart = 0;
  let startDot = -1;
  let preDotState = 0;
  let unmatchedSlash;
  while (index11--) {
    const code3 = path.codePointAt(index11);
    if (code3 === 47) {
      if (unmatchedSlash) {
        startPart = index11 + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index11 + 1;
    }
    if (code3 === 46) {
      if (startDot < 0) {
        startDot = index11;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (startDot < 0 || end < 0 || // We saw a non-dot character immediately before the dot.
  preDotState === 0 || // The (right-most) trimmed path component is exactly `..`.
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path.slice(startDot, end);
}
function join2(...segments) {
  let index11 = -1;
  let joined;
  while (++index11 < segments.length) {
    assertPath(segments[index11]);
    if (segments[index11]) {
      joined = joined === void 0 ? segments[index11] : joined + "/" + segments[index11];
    }
  }
  return joined === void 0 ? "." : normalize(joined);
}
function normalize(path) {
  assertPath(path);
  const absolute = path.codePointAt(0) === 47;
  let value = normalizeString(path, !absolute);
  if (value.length === 0 && !absolute) {
    value = ".";
  }
  if (value.length > 0 && path.codePointAt(path.length - 1) === 47) {
    value += "/";
  }
  return absolute ? "/" + value : value;
}
function normalizeString(path, allowAboveRoot) {
  let result = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index11 = -1;
  let code3;
  let lastSlashIndex;
  while (++index11 <= path.length) {
    if (index11 < path.length) {
      code3 = path.codePointAt(index11);
    } else if (code3 === 47) {
      break;
    } else {
      code3 = 47;
    }
    if (code3 === 47) {
      if (lastSlash === index11 - 1 || dots === 1) {
      } else if (lastSlash !== index11 - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.codePointAt(result.length - 1) !== 46 || result.codePointAt(result.length - 2) !== 46) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf("/");
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = "";
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
              }
              lastSlash = index11;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = "";
            lastSegmentLength = 0;
            lastSlash = index11;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length > 0 ? result + "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += "/" + path.slice(lastSlash + 1, index11);
        } else {
          result = path.slice(lastSlash + 1, index11);
        }
        lastSegmentLength = index11 - lastSlash - 1;
      }
      lastSlash = index11;
      dots = 0;
    } else if (code3 === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(path)
    );
  }
}
var minpath;
var init_minpath_browser = __esm({
  "node_modules/vfile/lib/minpath.browser.js"() {
    minpath = { basename, dirname, extname, join: join2, sep: "/" };
  }
});

// node_modules/vfile/lib/minproc.browser.js
function cwd() {
  return "/";
}
var minproc;
var init_minproc_browser = __esm({
  "node_modules/vfile/lib/minproc.browser.js"() {
    minproc = { cwd };
  }
});

// node_modules/vfile/lib/minurl.shared.js
function isUrl(fileUrlOrPath) {
  return Boolean(
    fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && "href" in fileUrlOrPath && fileUrlOrPath.href && "protocol" in fileUrlOrPath && fileUrlOrPath.protocol && // @ts-expect-error: indexing is fine.
    fileUrlOrPath.auth === void 0
  );
}
var init_minurl_shared = __esm({
  "node_modules/vfile/lib/minurl.shared.js"() {
  }
});

// node_modules/vfile/lib/minurl.browser.js
function urlToPath(path) {
  if (typeof path === "string") {
    path = new URL(path);
  } else if (!isUrl(path)) {
    const error2 = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + path + "`"
    );
    error2.code = "ERR_INVALID_ARG_TYPE";
    throw error2;
  }
  if (path.protocol !== "file:") {
    const error2 = new TypeError("The URL must be of scheme file");
    error2.code = "ERR_INVALID_URL_SCHEME";
    throw error2;
  }
  return getPathFromURLPosix(path);
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    const error2 = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    error2.code = "ERR_INVALID_FILE_URL_HOST";
    throw error2;
  }
  const pathname = url.pathname;
  let index11 = -1;
  while (++index11 < pathname.length) {
    if (pathname.codePointAt(index11) === 37 && pathname.codePointAt(index11 + 1) === 50) {
      const third = pathname.codePointAt(index11 + 2);
      if (third === 70 || third === 102) {
        const error2 = new TypeError(
          "File URL path must not include encoded / characters"
        );
        error2.code = "ERR_INVALID_FILE_URL_PATH";
        throw error2;
      }
    }
  }
  return decodeURIComponent(pathname);
}
var init_minurl_browser = __esm({
  "node_modules/vfile/lib/minurl.browser.js"() {
    init_minurl_shared();
    init_minurl_shared();
  }
});

// node_modules/vfile/lib/index.js
function assertPart(part, name) {
  if (part && part.includes(minpath.sep)) {
    throw new Error(
      "`" + name + "` cannot be a path: did not expect `" + minpath.sep + "`"
    );
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath2(path, name) {
  if (!path) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}
function isUint8Array(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}
var order, VFile;
var init_lib13 = __esm({
  "node_modules/vfile/lib/index.js"() {
    init_vfile_message();
    init_minpath_browser();
    init_minproc_browser();
    init_minurl_browser();
    order = /** @type {const} */
    [
      "history",
      "path",
      "basename",
      "stem",
      "extname",
      "dirname"
    ];
    VFile = class {
      /**
       * Create a new virtual file.
       *
       * `options` is treated as:
       *
       * *   `string` or `Uint8Array` — `{value: options}`
       * *   `URL` — `{path: options}`
       * *   `VFile` — shallow copies its data over to the new file
       * *   `object` — all fields are shallow copied over to the new file
       *
       * Path related fields are set in the following order (least specific to
       * most specific): `history`, `path`, `basename`, `stem`, `extname`,
       * `dirname`.
       *
       * You cannot set `dirname` or `extname` without setting either `history`,
       * `path`, `basename`, or `stem` too.
       *
       * @param {Compatible | null | undefined} [value]
       *   File value.
       * @returns
       *   New instance.
       */
      constructor(value) {
        let options2;
        if (!value) {
          options2 = {};
        } else if (isUrl(value)) {
          options2 = { path: value };
        } else if (typeof value === "string" || isUint8Array(value)) {
          options2 = { value };
        } else {
          options2 = value;
        }
        this.cwd = "cwd" in options2 ? "" : minproc.cwd();
        this.data = {};
        this.history = [];
        this.messages = [];
        this.value;
        this.map;
        this.result;
        this.stored;
        let index11 = -1;
        while (++index11 < order.length) {
          const field2 = order[index11];
          if (field2 in options2 && options2[field2] !== void 0 && options2[field2] !== null) {
            this[field2] = field2 === "history" ? [...options2[field2]] : options2[field2];
          }
        }
        let field;
        for (field in options2) {
          if (!order.includes(field)) {
            this[field] = options2[field];
          }
        }
      }
      /**
       * Get the basename (including extname) (example: `'index.min.js'`).
       *
       * @returns {string | undefined}
       *   Basename.
       */
      get basename() {
        return typeof this.path === "string" ? minpath.basename(this.path) : void 0;
      }
      /**
       * Set basename (including extname) (`'index.min.js'`).
       *
       * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
       * on windows).
       * Cannot be nullified (use `file.path = file.dirname` instead).
       *
       * @param {string} basename
       *   Basename.
       * @returns {undefined}
       *   Nothing.
       */
      set basename(basename2) {
        assertNonEmpty(basename2, "basename");
        assertPart(basename2, "basename");
        this.path = minpath.join(this.dirname || "", basename2);
      }
      /**
       * Get the parent path (example: `'~'`).
       *
       * @returns {string | undefined}
       *   Dirname.
       */
      get dirname() {
        return typeof this.path === "string" ? minpath.dirname(this.path) : void 0;
      }
      /**
       * Set the parent path (example: `'~'`).
       *
       * Cannot be set if there’s no `path` yet.
       *
       * @param {string | undefined} dirname
       *   Dirname.
       * @returns {undefined}
       *   Nothing.
       */
      set dirname(dirname2) {
        assertPath2(this.basename, "dirname");
        this.path = minpath.join(dirname2 || "", this.basename);
      }
      /**
       * Get the extname (including dot) (example: `'.js'`).
       *
       * @returns {string | undefined}
       *   Extname.
       */
      get extname() {
        return typeof this.path === "string" ? minpath.extname(this.path) : void 0;
      }
      /**
       * Set the extname (including dot) (example: `'.js'`).
       *
       * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
       * on windows).
       * Cannot be set if there’s no `path` yet.
       *
       * @param {string | undefined} extname
       *   Extname.
       * @returns {undefined}
       *   Nothing.
       */
      set extname(extname2) {
        assertPart(extname2, "extname");
        assertPath2(this.dirname, "extname");
        if (extname2) {
          if (extname2.codePointAt(0) !== 46) {
            throw new Error("`extname` must start with `.`");
          }
          if (extname2.includes(".", 1)) {
            throw new Error("`extname` cannot contain multiple dots");
          }
        }
        this.path = minpath.join(this.dirname, this.stem + (extname2 || ""));
      }
      /**
       * Get the full path (example: `'~/index.min.js'`).
       *
       * @returns {string}
       *   Path.
       */
      get path() {
        return this.history[this.history.length - 1];
      }
      /**
       * Set the full path (example: `'~/index.min.js'`).
       *
       * Cannot be nullified.
       * You can set a file URL (a `URL` object with a `file:` protocol) which will
       * be turned into a path with `url.fileURLToPath`.
       *
       * @param {URL | string} path
       *   Path.
       * @returns {undefined}
       *   Nothing.
       */
      set path(path) {
        if (isUrl(path)) {
          path = urlToPath(path);
        }
        assertNonEmpty(path, "path");
        if (this.path !== path) {
          this.history.push(path);
        }
      }
      /**
       * Get the stem (basename w/o extname) (example: `'index.min'`).
       *
       * @returns {string | undefined}
       *   Stem.
       */
      get stem() {
        return typeof this.path === "string" ? minpath.basename(this.path, this.extname) : void 0;
      }
      /**
       * Set the stem (basename w/o extname) (example: `'index.min'`).
       *
       * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
       * on windows).
       * Cannot be nullified (use `file.path = file.dirname` instead).
       *
       * @param {string} stem
       *   Stem.
       * @returns {undefined}
       *   Nothing.
       */
      set stem(stem) {
        assertNonEmpty(stem, "stem");
        assertPart(stem, "stem");
        this.path = minpath.join(this.dirname || "", stem + (this.extname || ""));
      }
      // Normal prototypal methods.
      /**
       * Create a fatal message for `reason` associated with the file.
       *
       * The `fatal` field of the message is set to `true` (error; file not usable)
       * and the `file` field is set to the current file path.
       * The message is added to the `messages` field on `file`.
       *
       * > 🪦 **Note**: also has obsolete signatures.
       *
       * @overload
       * @param {string} reason
       * @param {MessageOptions | null | undefined} [options]
       * @returns {never}
       *
       * @overload
       * @param {string} reason
       * @param {Node | NodeLike | null | undefined} parent
       * @param {string | null | undefined} [origin]
       * @returns {never}
       *
       * @overload
       * @param {string} reason
       * @param {Point | Position | null | undefined} place
       * @param {string | null | undefined} [origin]
       * @returns {never}
       *
       * @overload
       * @param {string} reason
       * @param {string | null | undefined} [origin]
       * @returns {never}
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {Node | NodeLike | null | undefined} parent
       * @param {string | null | undefined} [origin]
       * @returns {never}
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {Point | Position | null | undefined} place
       * @param {string | null | undefined} [origin]
       * @returns {never}
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {string | null | undefined} [origin]
       * @returns {never}
       *
       * @param {Error | VFileMessage | string} causeOrReason
       *   Reason for message, should use markdown.
       * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
       *   Configuration (optional).
       * @param {string | null | undefined} [origin]
       *   Place in code where the message originates (example:
       *   `'my-package:my-rule'` or `'my-rule'`).
       * @returns {never}
       *   Never.
       * @throws {VFileMessage}
       *   Message.
       */
      fail(causeOrReason, optionsOrParentOrPlace, origin) {
        const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
        message.fatal = true;
        throw message;
      }
      /**
       * Create an info message for `reason` associated with the file.
       *
       * The `fatal` field of the message is set to `undefined` (info; change
       * likely not needed) and the `file` field is set to the current file path.
       * The message is added to the `messages` field on `file`.
       *
       * > 🪦 **Note**: also has obsolete signatures.
       *
       * @overload
       * @param {string} reason
       * @param {MessageOptions | null | undefined} [options]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {string} reason
       * @param {Node | NodeLike | null | undefined} parent
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {string} reason
       * @param {Point | Position | null | undefined} place
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {string} reason
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {Node | NodeLike | null | undefined} parent
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {Point | Position | null | undefined} place
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @param {Error | VFileMessage | string} causeOrReason
       *   Reason for message, should use markdown.
       * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
       *   Configuration (optional).
       * @param {string | null | undefined} [origin]
       *   Place in code where the message originates (example:
       *   `'my-package:my-rule'` or `'my-rule'`).
       * @returns {VFileMessage}
       *   Message.
       */
      info(causeOrReason, optionsOrParentOrPlace, origin) {
        const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
        message.fatal = void 0;
        return message;
      }
      /**
       * Create a message for `reason` associated with the file.
       *
       * The `fatal` field of the message is set to `false` (warning; change may be
       * needed) and the `file` field is set to the current file path.
       * The message is added to the `messages` field on `file`.
       *
       * > 🪦 **Note**: also has obsolete signatures.
       *
       * @overload
       * @param {string} reason
       * @param {MessageOptions | null | undefined} [options]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {string} reason
       * @param {Node | NodeLike | null | undefined} parent
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {string} reason
       * @param {Point | Position | null | undefined} place
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {string} reason
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {Node | NodeLike | null | undefined} parent
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {Point | Position | null | undefined} place
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @overload
       * @param {Error | VFileMessage} cause
       * @param {string | null | undefined} [origin]
       * @returns {VFileMessage}
       *
       * @param {Error | VFileMessage | string} causeOrReason
       *   Reason for message, should use markdown.
       * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
       *   Configuration (optional).
       * @param {string | null | undefined} [origin]
       *   Place in code where the message originates (example:
       *   `'my-package:my-rule'` or `'my-rule'`).
       * @returns {VFileMessage}
       *   Message.
       */
      message(causeOrReason, optionsOrParentOrPlace, origin) {
        const message = new VFileMessage(
          // @ts-expect-error: the overloads are fine.
          causeOrReason,
          optionsOrParentOrPlace,
          origin
        );
        if (this.path) {
          message.name = this.path + ":" + message.name;
          message.file = this.path;
        }
        message.fatal = false;
        this.messages.push(message);
        return message;
      }
      /**
       * Serialize the file.
       *
       * > **Note**: which encodings are supported depends on the engine.
       * > For info on Node.js, see:
       * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
       *
       * @param {string | null | undefined} [encoding='utf8']
       *   Character encoding to understand `value` as when it’s a `Uint8Array`
       *   (default: `'utf-8'`).
       * @returns {string}
       *   Serialized file.
       */
      toString(encoding) {
        if (this.value === void 0) {
          return "";
        }
        if (typeof this.value === "string") {
          return this.value;
        }
        const decoder = new TextDecoder(encoding || void 0);
        return decoder.decode(this.value);
      }
    };
  }
});

// node_modules/vfile/index.js
var init_vfile = __esm({
  "node_modules/vfile/index.js"() {
    init_lib13();
  }
});

// node_modules/unified/lib/callable-instance.js
var CallableInstance;
var init_callable_instance = __esm({
  "node_modules/unified/lib/callable-instance.js"() {
    CallableInstance = /**
     * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
     */
    /** @type {unknown} */
    /**
     * @this {Function}
     * @param {string | symbol} property
     * @returns {(...parameters: Array<unknown>) => unknown}
     */
    function(property) {
      const self2 = this;
      const constr = self2.constructor;
      const proto = (
        /** @type {Record<string | symbol, Function>} */
        // Prototypes do exist.
        // type-coverage:ignore-next-line
        constr.prototype
      );
      const value = proto[property];
      const apply = function() {
        return value.apply(apply, arguments);
      };
      Object.setPrototypeOf(apply, proto);
      return apply;
    };
  }
});

// node_modules/unified/lib/index.js
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      "Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
  }
}
function assertNode(node2) {
  if (!isPlainObject(node2) || typeof node2.type !== "string") {
    throw new TypeError("Expected node, got `" + node2 + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      "`" + name + "` finished async. Use `" + asyncName + "` instead"
    );
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(
    value && typeof value === "object" && "message" in value && "messages" in value
  );
}
function looksLikeAValue(value) {
  return typeof value === "string" || isUint8Array2(value);
}
function isUint8Array2(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}
var import_extend, own5, Processor, unified;
var init_lib14 = __esm({
  "node_modules/unified/lib/index.js"() {
    init_bail();
    import_extend = __toESM(require_extend(), 1);
    init_default();
    init_is_plain_obj();
    init_trough();
    init_vfile();
    init_callable_instance();
    own5 = {}.hasOwnProperty;
    Processor = class _Processor extends CallableInstance {
      /**
       * Create a processor.
       */
      constructor() {
        super("copy");
        this.Compiler = void 0;
        this.Parser = void 0;
        this.attachers = [];
        this.compiler = void 0;
        this.freezeIndex = -1;
        this.frozen = void 0;
        this.namespace = {};
        this.parser = void 0;
        this.transformers = trough();
      }
      /**
       * Copy a processor.
       *
       * @deprecated
       *   This is a private internal method and should not be used.
       * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
       *   New *unfrozen* processor ({@linkcode Processor}) that is
       *   configured to work the same as its ancestor.
       *   When the descendant processor is configured in the future it does not
       *   affect the ancestral processor.
       */
      copy() {
        const destination = (
          /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
          new _Processor()
        );
        let index11 = -1;
        while (++index11 < this.attachers.length) {
          const attacher = this.attachers[index11];
          destination.use(...attacher);
        }
        destination.data((0, import_extend.default)(true, {}, this.namespace));
        return destination;
      }
      /**
       * Configure the processor with info available to all plugins.
       * Information is stored in an object.
       *
       * Typically, options can be given to a specific plugin, but sometimes it
       * makes sense to have information shared with several plugins.
       * For example, a list of HTML elements that are self-closing, which is
       * needed during all phases.
       *
       * > **Note**: setting information cannot occur on *frozen* processors.
       * > Call the processor first to create a new unfrozen processor.
       *
       * > **Note**: to register custom data in TypeScript, augment the
       * > {@linkcode Data} interface.
       *
       * @example
       *   This example show how to get and set info:
       *
       *   ```js
       *   import {unified} from 'unified'
       *
       *   const processor = unified().data('alpha', 'bravo')
       *
       *   processor.data('alpha') // => 'bravo'
       *
       *   processor.data() // => {alpha: 'bravo'}
       *
       *   processor.data({charlie: 'delta'})
       *
       *   processor.data() // => {charlie: 'delta'}
       *   ```
       *
       * @template {keyof Data} Key
       *
       * @overload
       * @returns {Data}
       *
       * @overload
       * @param {Data} dataset
       * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
       *
       * @overload
       * @param {Key} key
       * @returns {Data[Key]}
       *
       * @overload
       * @param {Key} key
       * @param {Data[Key]} value
       * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
       *
       * @param {Data | Key} [key]
       *   Key to get or set, or entire dataset to set, or nothing to get the
       *   entire dataset (optional).
       * @param {Data[Key]} [value]
       *   Value to set (optional).
       * @returns {unknown}
       *   The current processor when setting, the value at `key` when getting, or
       *   the entire dataset when getting without key.
       */
      data(key3, value) {
        if (typeof key3 === "string") {
          if (arguments.length === 2) {
            assertUnfrozen("data", this.frozen);
            this.namespace[key3] = value;
            return this;
          }
          return own5.call(this.namespace, key3) && this.namespace[key3] || void 0;
        }
        if (key3) {
          assertUnfrozen("data", this.frozen);
          this.namespace = key3;
          return this;
        }
        return this.namespace;
      }
      /**
       * Freeze a processor.
       *
       * Frozen processors are meant to be extended and not to be configured
       * directly.
       *
       * When a processor is frozen it cannot be unfrozen.
       * New processors working the same way can be created by calling the
       * processor.
       *
       * It’s possible to freeze processors explicitly by calling `.freeze()`.
       * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
       * `.stringify()`, `.process()`, or `.processSync()` are called.
       *
       * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
       *   The current processor.
       */
      freeze() {
        if (this.frozen) {
          return this;
        }
        const self2 = (
          /** @type {Processor} */
          /** @type {unknown} */
          this
        );
        while (++this.freezeIndex < this.attachers.length) {
          const [attacher, ...options2] = this.attachers[this.freezeIndex];
          if (options2[0] === false) {
            continue;
          }
          if (options2[0] === true) {
            options2[0] = void 0;
          }
          const transformer = attacher.call(self2, ...options2);
          if (typeof transformer === "function") {
            this.transformers.use(transformer);
          }
        }
        this.frozen = true;
        this.freezeIndex = Number.POSITIVE_INFINITY;
        return this;
      }
      /**
       * Parse text to a syntax tree.
       *
       * > **Note**: `parse` freezes the processor if not already *frozen*.
       *
       * > **Note**: `parse` performs the parse phase, not the run phase or other
       * > phases.
       *
       * @param {Compatible | undefined} [file]
       *   file to parse (optional); typically `string` or `VFile`; any value
       *   accepted as `x` in `new VFile(x)`.
       * @returns {ParseTree extends undefined ? Node : ParseTree}
       *   Syntax tree representing `file`.
       */
      parse(file) {
        this.freeze();
        const realFile = vfile(file);
        const parser = this.parser || this.Parser;
        assertParser("parse", parser);
        return parser(String(realFile), realFile);
      }
      /**
       * Process the given file as configured on the processor.
       *
       * > **Note**: `process` freezes the processor if not already *frozen*.
       *
       * > **Note**: `process` performs the parse, run, and stringify phases.
       *
       * @overload
       * @param {Compatible | undefined} file
       * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
       * @returns {undefined}
       *
       * @overload
       * @param {Compatible | undefined} [file]
       * @returns {Promise<VFileWithOutput<CompileResult>>}
       *
       * @param {Compatible | undefined} [file]
       *   File (optional); typically `string` or `VFile`]; any value accepted as
       *   `x` in `new VFile(x)`.
       * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
       *   Callback (optional).
       * @returns {Promise<VFile> | undefined}
       *   Nothing if `done` is given.
       *   Otherwise a promise, rejected with a fatal error or resolved with the
       *   processed file.
       *
       *   The parsed, transformed, and compiled value is available at
       *   `file.value` (see note).
       *
       *   > **Note**: unified typically compiles by serializing: most
       *   > compilers return `string` (or `Uint8Array`).
       *   > Some compilers, such as the one configured with
       *   > [`rehype-react`][rehype-react], return other values (in this case, a
       *   > React tree).
       *   > If you’re using a compiler that doesn’t serialize, expect different
       *   > result values.
       *   >
       *   > To register custom results in TypeScript, add them to
       *   > {@linkcode CompileResultMap}.
       *
       *   [rehype-react]: https://github.com/rehypejs/rehype-react
       */
      process(file, done) {
        const self2 = this;
        this.freeze();
        assertParser("process", this.parser || this.Parser);
        assertCompiler("process", this.compiler || this.Compiler);
        return done ? executor(void 0, done) : new Promise(executor);
        function executor(resolve2, reject) {
          const realFile = vfile(file);
          const parseTree = (
            /** @type {HeadTree extends undefined ? Node : HeadTree} */
            /** @type {unknown} */
            self2.parse(realFile)
          );
          self2.run(parseTree, realFile, function(error2, tree, file2) {
            if (error2 || !tree || !file2) {
              return realDone(error2);
            }
            const compileTree = (
              /** @type {CompileTree extends undefined ? Node : CompileTree} */
              /** @type {unknown} */
              tree
            );
            const compileResult = self2.stringify(compileTree, file2);
            if (looksLikeAValue(compileResult)) {
              file2.value = compileResult;
            } else {
              file2.result = compileResult;
            }
            realDone(
              error2,
              /** @type {VFileWithOutput<CompileResult>} */
              file2
            );
          });
          function realDone(error2, file2) {
            if (error2 || !file2) {
              reject(error2);
            } else if (resolve2) {
              resolve2(file2);
            } else {
              ok2(done, "`done` is defined if `resolve` is not");
              done(void 0, file2);
            }
          }
        }
      }
      /**
       * Process the given file as configured on the processor.
       *
       * An error is thrown if asynchronous transforms are configured.
       *
       * > **Note**: `processSync` freezes the processor if not already *frozen*.
       *
       * > **Note**: `processSync` performs the parse, run, and stringify phases.
       *
       * @param {Compatible | undefined} [file]
       *   File (optional); typically `string` or `VFile`; any value accepted as
       *   `x` in `new VFile(x)`.
       * @returns {VFileWithOutput<CompileResult>}
       *   The processed file.
       *
       *   The parsed, transformed, and compiled value is available at
       *   `file.value` (see note).
       *
       *   > **Note**: unified typically compiles by serializing: most
       *   > compilers return `string` (or `Uint8Array`).
       *   > Some compilers, such as the one configured with
       *   > [`rehype-react`][rehype-react], return other values (in this case, a
       *   > React tree).
       *   > If you’re using a compiler that doesn’t serialize, expect different
       *   > result values.
       *   >
       *   > To register custom results in TypeScript, add them to
       *   > {@linkcode CompileResultMap}.
       *
       *   [rehype-react]: https://github.com/rehypejs/rehype-react
       */
      processSync(file) {
        let complete = false;
        let result;
        this.freeze();
        assertParser("processSync", this.parser || this.Parser);
        assertCompiler("processSync", this.compiler || this.Compiler);
        this.process(file, realDone);
        assertDone("processSync", "process", complete);
        ok2(result, "we either bailed on an error or have a tree");
        return result;
        function realDone(error2, file2) {
          complete = true;
          bail(error2);
          result = file2;
        }
      }
      /**
       * Run *transformers* on a syntax tree.
       *
       * > **Note**: `run` freezes the processor if not already *frozen*.
       *
       * > **Note**: `run` performs the run phase, not other phases.
       *
       * @overload
       * @param {HeadTree extends undefined ? Node : HeadTree} tree
       * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
       * @returns {undefined}
       *
       * @overload
       * @param {HeadTree extends undefined ? Node : HeadTree} tree
       * @param {Compatible | undefined} file
       * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
       * @returns {undefined}
       *
       * @overload
       * @param {HeadTree extends undefined ? Node : HeadTree} tree
       * @param {Compatible | undefined} [file]
       * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
       *
       * @param {HeadTree extends undefined ? Node : HeadTree} tree
       *   Tree to transform and inspect.
       * @param {(
       *   RunCallback<TailTree extends undefined ? Node : TailTree> |
       *   Compatible
       * )} [file]
       *   File associated with `node` (optional); any value accepted as `x` in
       *   `new VFile(x)`.
       * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
       *   Callback (optional).
       * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
       *   Nothing if `done` is given.
       *   Otherwise, a promise rejected with a fatal error or resolved with the
       *   transformed tree.
       */
      run(tree, file, done) {
        assertNode(tree);
        this.freeze();
        const transformers = this.transformers;
        if (!done && typeof file === "function") {
          done = file;
          file = void 0;
        }
        return done ? executor(void 0, done) : new Promise(executor);
        function executor(resolve2, reject) {
          ok2(
            typeof file !== "function",
            "`file` can\u2019t be a `done` anymore, we checked"
          );
          const realFile = vfile(file);
          transformers.run(tree, realFile, realDone);
          function realDone(error2, outputTree, file2) {
            const resultingTree = (
              /** @type {TailTree extends undefined ? Node : TailTree} */
              outputTree || tree
            );
            if (error2) {
              reject(error2);
            } else if (resolve2) {
              resolve2(resultingTree);
            } else {
              ok2(done, "`done` is defined if `resolve` is not");
              done(void 0, resultingTree, file2);
            }
          }
        }
      }
      /**
       * Run *transformers* on a syntax tree.
       *
       * An error is thrown if asynchronous transforms are configured.
       *
       * > **Note**: `runSync` freezes the processor if not already *frozen*.
       *
       * > **Note**: `runSync` performs the run phase, not other phases.
       *
       * @param {HeadTree extends undefined ? Node : HeadTree} tree
       *   Tree to transform and inspect.
       * @param {Compatible | undefined} [file]
       *   File associated with `node` (optional); any value accepted as `x` in
       *   `new VFile(x)`.
       * @returns {TailTree extends undefined ? Node : TailTree}
       *   Transformed tree.
       */
      runSync(tree, file) {
        let complete = false;
        let result;
        this.run(tree, file, realDone);
        assertDone("runSync", "run", complete);
        ok2(result, "we either bailed on an error or have a tree");
        return result;
        function realDone(error2, tree2) {
          bail(error2);
          result = tree2;
          complete = true;
        }
      }
      /**
       * Compile a syntax tree.
       *
       * > **Note**: `stringify` freezes the processor if not already *frozen*.
       *
       * > **Note**: `stringify` performs the stringify phase, not the run phase
       * > or other phases.
       *
       * @param {CompileTree extends undefined ? Node : CompileTree} tree
       *   Tree to compile.
       * @param {Compatible | undefined} [file]
       *   File associated with `node` (optional); any value accepted as `x` in
       *   `new VFile(x)`.
       * @returns {CompileResult extends undefined ? Value : CompileResult}
       *   Textual representation of the tree (see note).
       *
       *   > **Note**: unified typically compiles by serializing: most compilers
       *   > return `string` (or `Uint8Array`).
       *   > Some compilers, such as the one configured with
       *   > [`rehype-react`][rehype-react], return other values (in this case, a
       *   > React tree).
       *   > If you’re using a compiler that doesn’t serialize, expect different
       *   > result values.
       *   >
       *   > To register custom results in TypeScript, add them to
       *   > {@linkcode CompileResultMap}.
       *
       *   [rehype-react]: https://github.com/rehypejs/rehype-react
       */
      stringify(tree, file) {
        this.freeze();
        const realFile = vfile(file);
        const compiler2 = this.compiler || this.Compiler;
        assertCompiler("stringify", compiler2);
        assertNode(tree);
        return compiler2(tree, realFile);
      }
      /**
       * Configure the processor to use a plugin, a list of usable values, or a
       * preset.
       *
       * If the processor is already using a plugin, the previous plugin
       * configuration is changed based on the options that are passed in.
       * In other words, the plugin is not added a second time.
       *
       * > **Note**: `use` cannot be called on *frozen* processors.
       * > Call the processor first to create a new unfrozen processor.
       *
       * @example
       *   There are many ways to pass plugins to `.use()`.
       *   This example gives an overview:
       *
       *   ```js
       *   import {unified} from 'unified'
       *
       *   unified()
       *     // Plugin with options:
       *     .use(pluginA, {x: true, y: true})
       *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
       *     .use(pluginA, {y: false, z: true})
       *     // Plugins:
       *     .use([pluginB, pluginC])
       *     // Two plugins, the second with options:
       *     .use([pluginD, [pluginE, {}]])
       *     // Preset with plugins and settings:
       *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
       *     // Settings only:
       *     .use({settings: {position: false}})
       *   ```
       *
       * @template {Array<unknown>} [Parameters=[]]
       * @template {Node | string | undefined} [Input=undefined]
       * @template [Output=Input]
       *
       * @overload
       * @param {Preset | null | undefined} [preset]
       * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
       *
       * @overload
       * @param {PluggableList} list
       * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
       *
       * @overload
       * @param {Plugin<Parameters, Input, Output>} plugin
       * @param {...(Parameters | [boolean])} parameters
       * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
       *
       * @param {PluggableList | Plugin | Preset | null | undefined} value
       *   Usable value.
       * @param {...unknown} parameters
       *   Parameters, when a plugin is given as a usable value.
       * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
       *   Current processor.
       */
      use(value, ...parameters) {
        const attachers = this.attachers;
        const namespace = this.namespace;
        assertUnfrozen("use", this.frozen);
        if (value === null || value === void 0) {
        } else if (typeof value === "function") {
          addPlugin(value, parameters);
        } else if (typeof value === "object") {
          if (Array.isArray(value)) {
            addList(value);
          } else {
            addPreset(value);
          }
        } else {
          throw new TypeError("Expected usable value, not `" + value + "`");
        }
        return this;
        function add(value2) {
          if (typeof value2 === "function") {
            addPlugin(value2, []);
          } else if (typeof value2 === "object") {
            if (Array.isArray(value2)) {
              const [plugin, ...parameters2] = (
                /** @type {PluginTuple<Array<unknown>>} */
                value2
              );
              addPlugin(plugin, parameters2);
            } else {
              addPreset(value2);
            }
          } else {
            throw new TypeError("Expected usable value, not `" + value2 + "`");
          }
        }
        function addPreset(result) {
          if (!("plugins" in result) && !("settings" in result)) {
            throw new Error(
              "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
            );
          }
          addList(result.plugins);
          if (result.settings) {
            namespace.settings = (0, import_extend.default)(true, namespace.settings, result.settings);
          }
        }
        function addList(plugins) {
          let index11 = -1;
          if (plugins === null || plugins === void 0) {
          } else if (Array.isArray(plugins)) {
            while (++index11 < plugins.length) {
              const thing = plugins[index11];
              add(thing);
            }
          } else {
            throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
          }
        }
        function addPlugin(plugin, parameters2) {
          let index11 = -1;
          let entryIndex = -1;
          while (++index11 < attachers.length) {
            if (attachers[index11][0] === plugin) {
              entryIndex = index11;
              break;
            }
          }
          if (entryIndex === -1) {
            attachers.push([plugin, ...parameters2]);
          } else if (parameters2.length > 0) {
            let [primary, ...rest] = parameters2;
            const currentPrimary = attachers[entryIndex][1];
            if (isPlainObject(currentPrimary) && isPlainObject(primary)) {
              primary = (0, import_extend.default)(true, currentPrimary, primary);
            }
            attachers[entryIndex] = [plugin, primary, ...rest];
          }
        }
      }
    };
    unified = new Processor().freeze();
  }
});

// node_modules/unified/index.js
var init_unified = __esm({
  "node_modules/unified/index.js"() {
    init_lib14();
  }
});

// node_modules/@ungap/structured-clone/esm/types.js
var VOID, PRIMITIVE, ARRAY, OBJECT, DATE, REGEXP, MAP, SET, ERROR, BIGINT;
var init_types = __esm({
  "node_modules/@ungap/structured-clone/esm/types.js"() {
    VOID = -1;
    PRIMITIVE = 0;
    ARRAY = 1;
    OBJECT = 2;
    DATE = 3;
    REGEXP = 4;
    MAP = 5;
    SET = 6;
    ERROR = 7;
    BIGINT = 8;
  }
});

// node_modules/@ungap/structured-clone/esm/deserialize.js
var env, deserializer, deserialize;
var init_deserialize = __esm({
  "node_modules/@ungap/structured-clone/esm/deserialize.js"() {
    init_types();
    env = typeof self === "object" ? self : globalThis;
    deserializer = ($, _) => {
      const as = (out, index11) => {
        $.set(index11, out);
        return out;
      };
      const unpair = (index11) => {
        if ($.has(index11))
          return $.get(index11);
        const [type, value] = _[index11];
        switch (type) {
          case PRIMITIVE:
          case VOID:
            return as(value, index11);
          case ARRAY: {
            const arr = as([], index11);
            for (const index12 of value)
              arr.push(unpair(index12));
            return arr;
          }
          case OBJECT: {
            const object = as({}, index11);
            for (const [key3, index12] of value)
              object[unpair(key3)] = unpair(index12);
            return object;
          }
          case DATE:
            return as(new Date(value), index11);
          case REGEXP: {
            const { source: source2, flags } = value;
            return as(new RegExp(source2, flags), index11);
          }
          case MAP: {
            const map4 = as(/* @__PURE__ */ new Map(), index11);
            for (const [key3, index12] of value)
              map4.set(unpair(key3), unpair(index12));
            return map4;
          }
          case SET: {
            const set2 = as(/* @__PURE__ */ new Set(), index11);
            for (const index12 of value)
              set2.add(unpair(index12));
            return set2;
          }
          case ERROR: {
            const { name, message } = value;
            return as(new env[name](message), index11);
          }
          case BIGINT:
            return as(BigInt(value), index11);
          case "BigInt":
            return as(Object(BigInt(value)), index11);
          case "ArrayBuffer":
            return as(new Uint8Array(value).buffer, value);
          case "DataView": {
            const { buffer } = new Uint8Array(value);
            return as(new DataView(buffer), value);
          }
        }
        return as(new env[type](value), index11);
      };
      return unpair;
    };
    deserialize = (serialized) => deserializer(/* @__PURE__ */ new Map(), serialized)(0);
  }
});

// node_modules/@ungap/structured-clone/esm/serialize.js
var EMPTY, toString2, keys, typeOf, shouldSkip, serializer, serialize2;
var init_serialize = __esm({
  "node_modules/@ungap/structured-clone/esm/serialize.js"() {
    init_types();
    EMPTY = "";
    ({ toString: toString2 } = {});
    ({ keys } = Object);
    typeOf = (value) => {
      const type = typeof value;
      if (type !== "object" || !value)
        return [PRIMITIVE, type];
      const asString = toString2.call(value).slice(8, -1);
      switch (asString) {
        case "Array":
          return [ARRAY, EMPTY];
        case "Object":
          return [OBJECT, EMPTY];
        case "Date":
          return [DATE, EMPTY];
        case "RegExp":
          return [REGEXP, EMPTY];
        case "Map":
          return [MAP, EMPTY];
        case "Set":
          return [SET, EMPTY];
        case "DataView":
          return [ARRAY, asString];
      }
      if (asString.includes("Array"))
        return [ARRAY, asString];
      if (asString.includes("Error"))
        return [ERROR, asString];
      return [OBJECT, asString];
    };
    shouldSkip = ([TYPE, type]) => TYPE === PRIMITIVE && (type === "function" || type === "symbol");
    serializer = (strict, json2, $, _) => {
      const as = (out, value) => {
        const index11 = _.push(out) - 1;
        $.set(value, index11);
        return index11;
      };
      const pair = (value) => {
        if ($.has(value))
          return $.get(value);
        let [TYPE, type] = typeOf(value);
        switch (TYPE) {
          case PRIMITIVE: {
            let entry = value;
            switch (type) {
              case "bigint":
                TYPE = BIGINT;
                entry = value.toString();
                break;
              case "function":
              case "symbol":
                if (strict)
                  throw new TypeError("unable to serialize " + type);
                entry = null;
                break;
              case "undefined":
                return as([VOID], value);
            }
            return as([TYPE, entry], value);
          }
          case ARRAY: {
            if (type) {
              let spread = value;
              if (type === "DataView") {
                spread = new Uint8Array(value.buffer);
              } else if (type === "ArrayBuffer") {
                spread = new Uint8Array(value);
              }
              return as([type, [...spread]], value);
            }
            const arr = [];
            const index11 = as([TYPE, arr], value);
            for (const entry of value)
              arr.push(pair(entry));
            return index11;
          }
          case OBJECT: {
            if (type) {
              switch (type) {
                case "BigInt":
                  return as([type, value.toString()], value);
                case "Boolean":
                case "Number":
                case "String":
                  return as([type, value.valueOf()], value);
              }
            }
            if (json2 && "toJSON" in value)
              return pair(value.toJSON());
            const entries = [];
            const index11 = as([TYPE, entries], value);
            for (const key3 of keys(value)) {
              if (strict || !shouldSkip(typeOf(value[key3])))
                entries.push([pair(key3), pair(value[key3])]);
            }
            return index11;
          }
          case DATE:
            return as([TYPE, value.toISOString()], value);
          case REGEXP: {
            const { source: source2, flags } = value;
            return as([TYPE, { source: source2, flags }], value);
          }
          case MAP: {
            const entries = [];
            const index11 = as([TYPE, entries], value);
            for (const [key3, entry] of value) {
              if (strict || !(shouldSkip(typeOf(key3)) || shouldSkip(typeOf(entry))))
                entries.push([pair(key3), pair(entry)]);
            }
            return index11;
          }
          case SET: {
            const entries = [];
            const index11 = as([TYPE, entries], value);
            for (const entry of value) {
              if (strict || !shouldSkip(typeOf(entry)))
                entries.push(pair(entry));
            }
            return index11;
          }
        }
        const { message } = value;
        return as([TYPE, { name: type, message }], value);
      };
      return pair;
    };
    serialize2 = (value, { json: json2, lossy } = {}) => {
      const _ = [];
      return serializer(!(json2 || lossy), !!json2, /* @__PURE__ */ new Map(), _)(value), _;
    };
  }
});

// node_modules/@ungap/structured-clone/esm/index.js
var esm_default;
var init_esm = __esm({
  "node_modules/@ungap/structured-clone/esm/index.js"() {
    init_deserialize();
    init_serialize();
    esm_default = typeof structuredClone === "function" ? (
      /* c8 ignore start */
      (any, options2) => options2 && ("json" in options2 || "lossy" in options2) ? deserialize(serialize2(any, options2)) : structuredClone(any)
    ) : (any, options2) => deserialize(serialize2(any, options2));
  }
});

// node_modules/unist-util-position/lib/index.js
function point3(type) {
  return point4;
  function point4(node2) {
    const point5 = node2 && node2.position && node2.position[type] || {};
    if (typeof point5.line === "number" && point5.line > 0 && typeof point5.column === "number" && point5.column > 0) {
      return {
        line: point5.line,
        column: point5.column,
        offset: typeof point5.offset === "number" && point5.offset > -1 ? point5.offset : void 0
      };
    }
  }
}
function position2(node2) {
  const start = pointStart(node2);
  const end = pointEnd(node2);
  if (start && end) {
    return { start, end };
  }
}
var pointEnd, pointStart;
var init_lib15 = __esm({
  "node_modules/unist-util-position/lib/index.js"() {
    pointEnd = point3("end");
    pointStart = point3("start");
  }
});

// node_modules/unist-util-position/index.js
var init_unist_util_position = __esm({
  "node_modules/unist-util-position/index.js"() {
    init_lib15();
  }
});

// node_modules/hast-util-sanitize/lib/schema.js
var aria, defaultSchema;
var init_schema = __esm({
  "node_modules/hast-util-sanitize/lib/schema.js"() {
    aria = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"];
    defaultSchema = {
      ancestors: {
        tbody: ["table"],
        td: ["table"],
        th: ["table"],
        thead: ["table"],
        tfoot: ["table"],
        tr: ["table"]
      },
      attributes: {
        a: [
          ...aria,
          // Note: these 3 are used by GFM footnotes, they do work on all links.
          "dataFootnoteBackref",
          "dataFootnoteRef",
          ["className", "data-footnote-backref"],
          "href"
        ],
        blockquote: ["cite"],
        // Note: this class is not normally allowed by GH, when manually writing
        // `code` as HTML in markdown, they adds it some other way.
        // We can’t do that, so we have to allow it.
        code: [["className", /^language-./]],
        del: ["cite"],
        div: ["itemScope", "itemType"],
        dl: [...aria],
        // Note: this is used by GFM footnotes.
        h2: [["className", "sr-only"]],
        img: [...aria, "longDesc", "src"],
        // Note: `input` is not normally allowed by GH, when manually writing
        // it in markdown, they add it from tasklists some other way.
        // We can’t do that, so we have to allow it.
        input: [
          ["disabled", true],
          ["type", "checkbox"]
        ],
        ins: ["cite"],
        // Note: this class is not normally allowed by GH, when manually writing
        // `li` as HTML in markdown, they adds it some other way.
        // We can’t do that, so we have to allow it.
        li: [["className", "task-list-item"]],
        // Note: this class is not normally allowed by GH, when manually writing
        // `ol` as HTML in markdown, they adds it some other way.
        // We can’t do that, so we have to allow it.
        ol: [...aria, ["className", "contains-task-list"]],
        q: ["cite"],
        section: ["dataFootnotes", ["className", "footnotes"]],
        source: ["srcSet"],
        summary: [...aria],
        table: [...aria],
        // Note: this class is not normally allowed by GH, when manually writing
        // `ol` as HTML in markdown, they adds it some other way.
        // We can’t do that, so we have to allow it.
        ul: [...aria, ["className", "contains-task-list"]],
        "*": [
          "abbr",
          "accept",
          "acceptCharset",
          "accessKey",
          "action",
          "align",
          "alt",
          "axis",
          "border",
          "cellPadding",
          "cellSpacing",
          "char",
          "charOff",
          "charSet",
          "checked",
          "clear",
          "colSpan",
          "color",
          "cols",
          "compact",
          "coords",
          "dateTime",
          "dir",
          // Note: `disabled` is technically allowed on all elements by GH.
          // But it is useless on everything except `input`.
          // Because `input`s are normally not allowed, but we allow them for
          // checkboxes due to tasklists, we allow `disabled` only there.
          "encType",
          "frame",
          "hSpace",
          "headers",
          "height",
          "hrefLang",
          "htmlFor",
          "id",
          "isMap",
          "itemProp",
          "label",
          "lang",
          "maxLength",
          "media",
          "method",
          "multiple",
          "name",
          "noHref",
          "noShade",
          "noWrap",
          "open",
          "prompt",
          "readOnly",
          "rev",
          "rowSpan",
          "rows",
          "rules",
          "scope",
          "selected",
          "shape",
          "size",
          "span",
          "start",
          "summary",
          "tabIndex",
          "title",
          "useMap",
          "vAlign",
          "value",
          "width"
        ]
      },
      clobber: ["ariaDescribedBy", "ariaLabelledBy", "id", "name"],
      clobberPrefix: "user-content-",
      protocols: {
        cite: ["http", "https"],
        href: ["http", "https", "irc", "ircs", "mailto", "xmpp"],
        longDesc: ["http", "https"],
        src: ["http", "https"]
      },
      required: {
        input: { disabled: true, type: "checkbox" }
      },
      strip: ["script"],
      tagNames: [
        "a",
        "b",
        "blockquote",
        "br",
        "code",
        "dd",
        "del",
        "details",
        "div",
        "dl",
        "dt",
        "em",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "hr",
        "i",
        "img",
        // Note: `input` is not normally allowed by GH, when manually writing
        // it in markdown, they add it from tasklists some other way.
        // We can’t do that, so we have to allow it.
        "input",
        "ins",
        "kbd",
        "li",
        "ol",
        "p",
        "picture",
        "pre",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "source",
        "span",
        "strike",
        "strong",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "tr",
        "tt",
        "ul",
        "var"
      ]
    };
  }
});

// node_modules/hast-util-sanitize/lib/index.js
function sanitize(node2, options2) {
  let result = { type: "root", children: [] };
  const state2 = {
    schema: options2 ? { ...defaultSchema, ...options2 } : defaultSchema,
    stack: []
  };
  const replace = transform(state2, node2);
  if (replace) {
    if (Array.isArray(replace)) {
      if (replace.length === 1) {
        result = replace[0];
      } else {
        result.children = replace;
      }
    } else {
      result = replace;
    }
  }
  return result;
}
function transform(state2, node2) {
  if (node2 && typeof node2 === "object") {
    const unsafe2 = (
      /** @type {Record<string, Readonly<unknown>>} */
      node2
    );
    const type = typeof unsafe2.type === "string" ? unsafe2.type : "";
    switch (type) {
      case "comment": {
        return comment(state2, unsafe2);
      }
      case "doctype": {
        return doctype(state2, unsafe2);
      }
      case "element": {
        return element(state2, unsafe2);
      }
      case "root": {
        return root3(state2, unsafe2);
      }
      case "text": {
        return text5(state2, unsafe2);
      }
      default:
    }
  }
}
function comment(state2, unsafe2) {
  if (state2.schema.allowComments) {
    const result = typeof unsafe2.value === "string" ? unsafe2.value : "";
    const index11 = result.indexOf("-->");
    const value = index11 < 0 ? result : result.slice(0, index11);
    const node2 = { type: "comment", value };
    patch(node2, unsafe2);
    return node2;
  }
}
function doctype(state2, unsafe2) {
  if (state2.schema.allowDoctypes) {
    const node2 = { type: "doctype" };
    patch(node2, unsafe2);
    return node2;
  }
}
function element(state2, unsafe2) {
  const name = typeof unsafe2.tagName === "string" ? unsafe2.tagName : "";
  state2.stack.push(name);
  const content3 = (
    /** @type {Array<ElementContent>} */
    children(state2, unsafe2.children)
  );
  const properties_ = properties(state2, unsafe2.properties);
  state2.stack.pop();
  let safeElement = false;
  if (name && name !== "*" && (!state2.schema.tagNames || state2.schema.tagNames.includes(name))) {
    safeElement = true;
    if (state2.schema.ancestors && own6.call(state2.schema.ancestors, name)) {
      const ancestors = state2.schema.ancestors[name];
      let index11 = -1;
      safeElement = false;
      while (++index11 < ancestors.length) {
        if (state2.stack.includes(ancestors[index11])) {
          safeElement = true;
        }
      }
    }
  }
  if (!safeElement) {
    return state2.schema.strip && !state2.schema.strip.includes(name) ? content3 : void 0;
  }
  const node2 = {
    type: "element",
    tagName: name,
    properties: properties_,
    children: content3
  };
  patch(node2, unsafe2);
  return node2;
}
function root3(state2, unsafe2) {
  const content3 = (
    /** @type {Array<RootContent>} */
    children(state2, unsafe2.children)
  );
  const node2 = { type: "root", children: content3 };
  patch(node2, unsafe2);
  return node2;
}
function text5(_, unsafe2) {
  const value = typeof unsafe2.value === "string" ? unsafe2.value : "";
  const node2 = { type: "text", value };
  patch(node2, unsafe2);
  return node2;
}
function children(state2, children2) {
  const results = [];
  if (Array.isArray(children2)) {
    const childrenUnknown = (
      /** @type {Array<Readonly<unknown>>} */
      children2
    );
    let index11 = -1;
    while (++index11 < childrenUnknown.length) {
      const value = transform(state2, childrenUnknown[index11]);
      if (value) {
        if (Array.isArray(value)) {
          results.push(...value);
        } else {
          results.push(value);
        }
      }
    }
  }
  return results;
}
function properties(state2, properties2) {
  const tagName = state2.stack[state2.stack.length - 1];
  const attributes = state2.schema.attributes;
  const required = state2.schema.required;
  const specific = attributes && own6.call(attributes, tagName) ? attributes[tagName] : void 0;
  const defaults = attributes && own6.call(attributes, "*") ? attributes["*"] : void 0;
  const properties_ = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    properties2 && typeof properties2 === "object" ? properties2 : {}
  );
  const result = {};
  let key3;
  for (key3 in properties_) {
    if (own6.call(properties_, key3)) {
      const unsafe2 = properties_[key3];
      let safe2 = propertyValue(
        state2,
        findDefinition(specific, key3),
        key3,
        unsafe2
      );
      if (safe2 === null || safe2 === void 0) {
        safe2 = propertyValue(state2, findDefinition(defaults, key3), key3, unsafe2);
      }
      if (safe2 !== null && safe2 !== void 0) {
        result[key3] = safe2;
      }
    }
  }
  if (required && own6.call(required, tagName)) {
    const properties3 = required[tagName];
    for (key3 in properties3) {
      if (own6.call(properties3, key3) && !own6.call(result, key3)) {
        result[key3] = properties3[key3];
      }
    }
  }
  return result;
}
function propertyValue(state2, definition3, key3, value) {
  return definition3 ? Array.isArray(value) ? propertyValueMany(state2, definition3, key3, value) : propertyValuePrimitive(state2, definition3, key3, value) : void 0;
}
function propertyValueMany(state2, definition3, key3, values) {
  let index11 = -1;
  const result = [];
  while (++index11 < values.length) {
    const value = propertyValuePrimitive(state2, definition3, key3, values[index11]);
    if (typeof value === "number" || typeof value === "string") {
      result.push(value);
    }
  }
  return result;
}
function propertyValuePrimitive(state2, definition3, key3, value) {
  if (typeof value !== "boolean" && typeof value !== "number" && typeof value !== "string") {
    return;
  }
  if (!safeProtocol(state2, key3, value)) {
    return;
  }
  if (typeof definition3 === "object" && definition3.length > 1) {
    let ok3 = false;
    let index11 = 0;
    while (++index11 < definition3.length) {
      const allowed = definition3[index11];
      if (allowed && typeof allowed === "object" && "flags" in allowed) {
        if (allowed.test(String(value))) {
          ok3 = true;
          break;
        }
      } else if (allowed === value) {
        ok3 = true;
        break;
      }
    }
    if (!ok3) return;
  }
  return state2.schema.clobber && state2.schema.clobberPrefix && state2.schema.clobber.includes(key3) ? state2.schema.clobberPrefix + value : value;
}
function safeProtocol(state2, key3, value) {
  const protocols = state2.schema.protocols && own6.call(state2.schema.protocols, key3) ? state2.schema.protocols[key3] : void 0;
  if (!protocols || protocols.length === 0) {
    return true;
  }
  const url = String(value);
  const colon = url.indexOf(":");
  const questionMark = url.indexOf("?");
  const numberSign = url.indexOf("#");
  const slash = url.indexOf("/");
  if (colon < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
  slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign) {
    return true;
  }
  let index11 = -1;
  while (++index11 < protocols.length) {
    const protocol = protocols[index11];
    if (colon === protocol.length && url.slice(0, protocol.length) === protocol) {
      return true;
    }
  }
  return false;
}
function patch(node2, unsafe2) {
  const cleanPosition = position2(
    // @ts-expect-error: looks like a node.
    unsafe2
  );
  if (unsafe2.data) {
    node2.data = esm_default(unsafe2.data);
  }
  if (cleanPosition) node2.position = cleanPosition;
}
function findDefinition(definitions, key3) {
  let dataDefault;
  let index11 = -1;
  if (definitions) {
    while (++index11 < definitions.length) {
      const entry = definitions[index11];
      const name = typeof entry === "string" ? entry : entry[0];
      if (name === key3) {
        return entry;
      }
      if (name === "data*") dataDefault = entry;
    }
  }
  if (key3.length > 4 && key3.slice(0, 4).toLowerCase() === "data") {
    return dataDefault;
  }
}
var own6;
var init_lib16 = __esm({
  "node_modules/hast-util-sanitize/lib/index.js"() {
    init_esm();
    init_unist_util_position();
    init_schema();
    own6 = {}.hasOwnProperty;
  }
});

// node_modules/hast-util-sanitize/index.js
var init_hast_util_sanitize = __esm({
  "node_modules/hast-util-sanitize/index.js"() {
    init_lib16();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function blockquote2(state2, node2) {
  const result = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: state2.wrap(state2.all(node2), true)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_blockquote2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/blockquote.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/break.js
function hardBreak2(state2, node2) {
  const result = { type: "element", tagName: "br", properties: {}, children: [] };
  state2.patch(node2, result);
  return [state2.applyData(node2, result), { type: "text", value: "\n" }];
}
var init_break2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/break.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/code.js
function code2(state2, node2) {
  const value = node2.value ? node2.value + "\n" : "";
  const properties2 = {};
  if (node2.lang) {
    properties2.className = ["language-" + node2.lang];
  }
  let result = {
    type: "element",
    tagName: "code",
    properties: properties2,
    children: [{ type: "text", value }]
  };
  if (node2.meta) {
    result.data = { meta: node2.meta };
  }
  state2.patch(node2, result);
  result = state2.applyData(node2, result);
  result = { type: "element", tagName: "pre", properties: {}, children: [result] };
  state2.patch(node2, result);
  return result;
}
var init_code2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/code.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/delete.js
function strikethrough(state2, node2) {
  const result = {
    type: "element",
    tagName: "del",
    properties: {},
    children: state2.all(node2)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_delete = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/delete.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function emphasis2(state2, node2) {
  const result = {
    type: "element",
    tagName: "em",
    properties: {},
    children: state2.all(node2)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_emphasis2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/emphasis.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function footnoteReference(state2, node2) {
  const clobberPrefix = typeof state2.options.clobberPrefix === "string" ? state2.options.clobberPrefix : "user-content-";
  const id = String(node2.identifier).toUpperCase();
  const safeId = normalizeUri(id.toLowerCase());
  const index11 = state2.footnoteOrder.indexOf(id);
  let counter;
  let reuseCounter = state2.footnoteCounts.get(id);
  if (reuseCounter === void 0) {
    reuseCounter = 0;
    state2.footnoteOrder.push(id);
    counter = state2.footnoteOrder.length;
  } else {
    counter = index11 + 1;
  }
  reuseCounter += 1;
  state2.footnoteCounts.set(id, reuseCounter);
  const link3 = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + clobberPrefix + "fn-" + safeId,
      id: clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: true,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(counter) }]
  };
  state2.patch(node2, link3);
  const sup = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [link3]
  };
  state2.patch(node2, sup);
  return state2.applyData(node2, sup);
}
var init_footnote_reference = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js"() {
    init_micromark_util_sanitize_uri();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/heading.js
function heading2(state2, node2) {
  const result = {
    type: "element",
    tagName: "h" + node2.depth,
    properties: {},
    children: state2.all(node2)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_heading2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/heading.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/html.js
function html3(state2, node2) {
  if (state2.options.allowDangerousHtml) {
    const result = { type: "raw", value: node2.value };
    state2.patch(node2, result);
    return state2.applyData(node2, result);
  }
  return void 0;
}
var init_html3 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/html.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/revert.js
function revert(state2, node2) {
  const subtype = node2.referenceType;
  let suffix = "]";
  if (subtype === "collapsed") {
    suffix += "[]";
  } else if (subtype === "full") {
    suffix += "[" + (node2.label || node2.identifier) + "]";
  }
  if (node2.type === "imageReference") {
    return [{ type: "text", value: "![" + node2.alt + suffix }];
  }
  const contents = state2.all(node2);
  const head3 = contents[0];
  if (head3 && head3.type === "text") {
    head3.value = "[" + head3.value;
  } else {
    contents.unshift({ type: "text", value: "[" });
  }
  const tail = contents[contents.length - 1];
  if (tail && tail.type === "text") {
    tail.value += suffix;
  } else {
    contents.push({ type: "text", value: suffix });
  }
  return contents;
}
var init_revert = __esm({
  "node_modules/mdast-util-to-hast/lib/revert.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function imageReference2(state2, node2) {
  const id = String(node2.identifier).toUpperCase();
  const definition3 = state2.definitionById.get(id);
  if (!definition3) {
    return revert(state2, node2);
  }
  const properties2 = { src: normalizeUri(definition3.url || ""), alt: node2.alt };
  if (definition3.title !== null && definition3.title !== void 0) {
    properties2.title = definition3.title;
  }
  const result = { type: "element", tagName: "img", properties: properties2, children: [] };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_image_reference2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/image-reference.js"() {
    init_micromark_util_sanitize_uri();
    init_revert();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/image.js
function image2(state2, node2) {
  const properties2 = { src: normalizeUri(node2.url) };
  if (node2.alt !== null && node2.alt !== void 0) {
    properties2.alt = node2.alt;
  }
  if (node2.title !== null && node2.title !== void 0) {
    properties2.title = node2.title;
  }
  const result = { type: "element", tagName: "img", properties: properties2, children: [] };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_image2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/image.js"() {
    init_micromark_util_sanitize_uri();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function inlineCode2(state2, node2) {
  const text8 = { type: "text", value: node2.value.replace(/\r?\n|\r/g, " ") };
  state2.patch(node2, text8);
  const result = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [text8]
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_inline_code2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/inline-code.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function linkReference2(state2, node2) {
  const id = String(node2.identifier).toUpperCase();
  const definition3 = state2.definitionById.get(id);
  if (!definition3) {
    return revert(state2, node2);
  }
  const properties2 = { href: normalizeUri(definition3.url || "") };
  if (definition3.title !== null && definition3.title !== void 0) {
    properties2.title = definition3.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties: properties2,
    children: state2.all(node2)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_link_reference2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/link-reference.js"() {
    init_micromark_util_sanitize_uri();
    init_revert();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/link.js
function link2(state2, node2) {
  const properties2 = { href: normalizeUri(node2.url) };
  if (node2.title !== null && node2.title !== void 0) {
    properties2.title = node2.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties: properties2,
    children: state2.all(node2)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_link2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/link.js"() {
    init_micromark_util_sanitize_uri();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function listItem2(state2, node2, parent) {
  const results = state2.all(node2);
  const loose = parent ? listLoose(parent) : listItemLoose(node2);
  const properties2 = {};
  const children2 = [];
  if (typeof node2.checked === "boolean") {
    const head3 = results[0];
    let paragraph3;
    if (head3 && head3.type === "element" && head3.tagName === "p") {
      paragraph3 = head3;
    } else {
      paragraph3 = { type: "element", tagName: "p", properties: {}, children: [] };
      results.unshift(paragraph3);
    }
    if (paragraph3.children.length > 0) {
      paragraph3.children.unshift({ type: "text", value: " " });
    }
    paragraph3.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: node2.checked, disabled: true },
      children: []
    });
    properties2.className = ["task-list-item"];
  }
  let index11 = -1;
  while (++index11 < results.length) {
    const child = results[index11];
    if (loose || index11 !== 0 || child.type !== "element" || child.tagName !== "p") {
      children2.push({ type: "text", value: "\n" });
    }
    if (child.type === "element" && child.tagName === "p" && !loose) {
      children2.push(...child.children);
    } else {
      children2.push(child);
    }
  }
  const tail = results[results.length - 1];
  if (tail && (loose || tail.type !== "element" || tail.tagName !== "p")) {
    children2.push({ type: "text", value: "\n" });
  }
  const result = { type: "element", tagName: "li", properties: properties2, children: children2 };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
function listLoose(node2) {
  let loose = false;
  if (node2.type === "list") {
    loose = node2.spread || false;
    const children2 = node2.children;
    let index11 = -1;
    while (!loose && ++index11 < children2.length) {
      loose = listItemLoose(children2[index11]);
    }
  }
  return loose;
}
function listItemLoose(node2) {
  const spread = node2.spread;
  return spread === null || spread === void 0 ? node2.children.length > 1 : spread;
}
var init_list_item2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/list-item.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/list.js
function list4(state2, node2) {
  const properties2 = {};
  const results = state2.all(node2);
  let index11 = -1;
  if (typeof node2.start === "number" && node2.start !== 1) {
    properties2.start = node2.start;
  }
  while (++index11 < results.length) {
    const child = results[index11];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties2.className = ["contains-task-list"];
      break;
    }
  }
  const result = {
    type: "element",
    tagName: node2.ordered ? "ol" : "ul",
    properties: properties2,
    children: state2.wrap(results, true)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_list3 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/list.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function paragraph2(state2, node2) {
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state2.all(node2)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_paragraph2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/paragraph.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/root.js
function root4(state2, node2) {
  const result = { type: "root", children: state2.wrap(state2.all(node2)) };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_root2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/root.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/strong.js
function strong2(state2, node2) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: state2.all(node2)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_strong2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/strong.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/table.js
function table(state2, node2) {
  const rows = state2.all(node2);
  const firstRow = rows.shift();
  const tableContent = [];
  if (firstRow) {
    const head3 = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: state2.wrap([firstRow], true)
    };
    state2.patch(node2.children[0], head3);
    tableContent.push(head3);
  }
  if (rows.length > 0) {
    const body4 = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: state2.wrap(rows, true)
    };
    const start = pointStart(node2.children[1]);
    const end = pointEnd(node2.children[node2.children.length - 1]);
    if (start && end) body4.position = { start, end };
    tableContent.push(body4);
  }
  const result = {
    type: "element",
    tagName: "table",
    properties: {},
    children: state2.wrap(tableContent, true)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_table = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/table.js"() {
    init_unist_util_position();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function tableRow(state2, node2, parent) {
  const siblings2 = parent ? parent.children : void 0;
  const rowIndex = siblings2 ? siblings2.indexOf(node2) : 1;
  const tagName = rowIndex === 0 ? "th" : "td";
  const align = parent && parent.type === "table" ? parent.align : void 0;
  const length = align ? align.length : node2.children.length;
  let cellIndex = -1;
  const cells2 = [];
  while (++cellIndex < length) {
    const cell = node2.children[cellIndex];
    const properties2 = {};
    const alignValue = align ? align[cellIndex] : void 0;
    if (alignValue) {
      properties2.align = alignValue;
    }
    let result2 = { type: "element", tagName, properties: properties2, children: [] };
    if (cell) {
      result2.children = state2.all(cell);
      state2.patch(cell, result2);
      result2 = state2.applyData(cell, result2);
    }
    cells2.push(result2);
  }
  const result = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: state2.wrap(cells2, true)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_table_row = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/table-row.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function tableCell(state2, node2) {
  const result = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: state2.all(node2)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_table_cell = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/table-cell.js"() {
    "";
  }
});

// node_modules/trim-lines/index.js
function trimLines(value) {
  const source2 = String(value);
  const search2 = /\r?\n|\r/g;
  let match = search2.exec(source2);
  let last = 0;
  const lines = [];
  while (match) {
    lines.push(
      trimLine(source2.slice(last, match.index), last > 0, true),
      match[0]
    );
    last = match.index + match[0].length;
    match = search2.exec(source2);
  }
  lines.push(trimLine(source2.slice(last), last > 0, false));
  return lines.join("");
}
function trimLine(value, start, end) {
  let startIndex = 0;
  let endIndex = value.length;
  if (start) {
    let code3 = value.codePointAt(startIndex);
    while (code3 === tab || code3 === space) {
      startIndex++;
      code3 = value.codePointAt(startIndex);
    }
  }
  if (end) {
    let code3 = value.codePointAt(endIndex - 1);
    while (code3 === tab || code3 === space) {
      endIndex--;
      code3 = value.codePointAt(endIndex - 1);
    }
  }
  return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
}
var tab, space;
var init_trim_lines = __esm({
  "node_modules/trim-lines/index.js"() {
    tab = 9;
    space = 32;
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/text.js
function text6(state2, node2) {
  const result = { type: "text", value: trimLines(String(node2.value)) };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_text3 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/text.js"() {
    init_trim_lines();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function thematicBreak3(state2, node2) {
  const result = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
var init_thematic_break3 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js"() {
    "";
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/index.js
function ignore() {
  return void 0;
}
var handlers;
var init_handlers = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/index.js"() {
    init_blockquote2();
    init_break2();
    init_code2();
    init_delete();
    init_emphasis2();
    init_footnote_reference();
    init_heading2();
    init_html3();
    init_image_reference2();
    init_image2();
    init_inline_code2();
    init_link_reference2();
    init_link2();
    init_list_item2();
    init_list3();
    init_paragraph2();
    init_root2();
    init_strong2();
    init_table();
    init_table_row();
    init_table_cell();
    init_text3();
    init_thematic_break3();
    handlers = {
      blockquote: blockquote2,
      break: hardBreak2,
      code: code2,
      delete: strikethrough,
      emphasis: emphasis2,
      footnoteReference,
      heading: heading2,
      html: html3,
      imageReference: imageReference2,
      image: image2,
      inlineCode: inlineCode2,
      linkReference: linkReference2,
      link: link2,
      listItem: listItem2,
      list: list4,
      paragraph: paragraph2,
      // @ts-expect-error: root is different, but hard to type.
      root: root4,
      strong: strong2,
      table,
      tableCell,
      tableRow,
      text: text6,
      thematicBreak: thematicBreak3,
      toml: ignore,
      yaml: ignore,
      definition: ignore,
      footnoteDefinition: ignore
    };
  }
});

// node_modules/mdast-util-to-hast/lib/footer.js
function defaultFootnoteBackContent(_, rereferenceIndex) {
  const result = [{ type: "text", value: "\u21A9" }];
  if (rereferenceIndex > 1) {
    result.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [{ type: "text", value: String(rereferenceIndex) }]
    });
  }
  return result;
}
function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
  return "Back to reference " + (referenceIndex + 1) + (rereferenceIndex > 1 ? "-" + rereferenceIndex : "");
}
function footer(state2) {
  const clobberPrefix = typeof state2.options.clobberPrefix === "string" ? state2.options.clobberPrefix : "user-content-";
  const footnoteBackContent = state2.options.footnoteBackContent || defaultFootnoteBackContent;
  const footnoteBackLabel = state2.options.footnoteBackLabel || defaultFootnoteBackLabel;
  const footnoteLabel = state2.options.footnoteLabel || "Footnotes";
  const footnoteLabelTagName = state2.options.footnoteLabelTagName || "h2";
  const footnoteLabelProperties = state2.options.footnoteLabelProperties || {
    className: ["sr-only"]
  };
  const listItems = [];
  let referenceIndex = -1;
  while (++referenceIndex < state2.footnoteOrder.length) {
    const definition3 = state2.footnoteById.get(
      state2.footnoteOrder[referenceIndex]
    );
    if (!definition3) {
      continue;
    }
    const content3 = state2.all(definition3);
    const id = String(definition3.identifier).toUpperCase();
    const safeId = normalizeUri(id.toLowerCase());
    let rereferenceIndex = 0;
    const backReferences = [];
    const counts = state2.footnoteCounts.get(id);
    while (counts !== void 0 && ++rereferenceIndex <= counts) {
      if (backReferences.length > 0) {
        backReferences.push({ type: "text", value: " " });
      }
      let children2 = typeof footnoteBackContent === "string" ? footnoteBackContent : footnoteBackContent(referenceIndex, rereferenceIndex);
      if (typeof children2 === "string") {
        children2 = { type: "text", value: children2 };
      }
      backReferences.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + clobberPrefix + "fnref-" + safeId + (rereferenceIndex > 1 ? "-" + rereferenceIndex : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof footnoteBackLabel === "string" ? footnoteBackLabel : footnoteBackLabel(referenceIndex, rereferenceIndex),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(children2) ? children2 : [children2]
      });
    }
    const tail = content3[content3.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === "text") {
        tailTail.value += " ";
      } else {
        tail.children.push({ type: "text", value: " " });
      }
      tail.children.push(...backReferences);
    } else {
      content3.push(...backReferences);
    }
    const listItem3 = {
      type: "element",
      tagName: "li",
      properties: { id: clobberPrefix + "fn-" + safeId },
      children: state2.wrap(content3, true)
    };
    state2.patch(definition3, listItem3);
    listItems.push(listItem3);
  }
  if (listItems.length === 0) {
    return;
  }
  return {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: true, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: footnoteLabelTagName,
        properties: {
          ...esm_default(footnoteLabelProperties),
          id: "footnote-label"
        },
        children: [{ type: "text", value: footnoteLabel }]
      },
      { type: "text", value: "\n" },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: state2.wrap(listItems, true)
      },
      { type: "text", value: "\n" }
    ]
  };
}
var init_footer = __esm({
  "node_modules/mdast-util-to-hast/lib/footer.js"() {
    init_esm();
    init_micromark_util_sanitize_uri();
  }
});

// node_modules/mdast-util-to-hast/lib/state.js
function createState(tree, options2) {
  const settings = options2 || emptyOptions2;
  const definitionById = /* @__PURE__ */ new Map();
  const footnoteById = /* @__PURE__ */ new Map();
  const footnoteCounts = /* @__PURE__ */ new Map();
  const handlers2 = { ...handlers, ...settings.handlers };
  const state2 = {
    all: all3,
    applyData,
    definitionById,
    footnoteById,
    footnoteCounts,
    footnoteOrder: [],
    handlers: handlers2,
    one: one3,
    options: settings,
    patch: patch2,
    wrap: wrap2
  };
  visit(tree, function(node2) {
    if (node2.type === "definition" || node2.type === "footnoteDefinition") {
      const map4 = node2.type === "definition" ? definitionById : footnoteById;
      const id = String(node2.identifier).toUpperCase();
      if (!map4.has(id)) {
        map4.set(id, node2);
      }
    }
  });
  return state2;
  function one3(node2, parent) {
    const type = node2.type;
    const handle3 = state2.handlers[type];
    if (own7.call(state2.handlers, type) && handle3) {
      return handle3(state2, node2, parent);
    }
    if (state2.options.passThrough && state2.options.passThrough.includes(type)) {
      if ("children" in node2) {
        const { children: children2, ...shallow } = node2;
        const result = esm_default(shallow);
        result.children = state2.all(node2);
        return result;
      }
      return esm_default(node2);
    }
    const unknown3 = state2.options.unknownHandler || defaultUnknownHandler;
    return unknown3(state2, node2, parent);
  }
  function all3(parent) {
    const values = [];
    if ("children" in parent) {
      const nodes = parent.children;
      let index11 = -1;
      while (++index11 < nodes.length) {
        const result = state2.one(nodes[index11], parent);
        if (result) {
          if (index11 && nodes[index11 - 1].type === "break") {
            if (!Array.isArray(result) && result.type === "text") {
              result.value = trimMarkdownSpaceStart(result.value);
            }
            if (!Array.isArray(result) && result.type === "element") {
              const head3 = result.children[0];
              if (head3 && head3.type === "text") {
                head3.value = trimMarkdownSpaceStart(head3.value);
              }
            }
          }
          if (Array.isArray(result)) {
            values.push(...result);
          } else {
            values.push(result);
          }
        }
      }
    }
    return values;
  }
}
function patch2(from, to) {
  if (from.position) to.position = position2(from);
}
function applyData(from, to) {
  let result = to;
  if (from && from.data) {
    const hName = from.data.hName;
    const hChildren = from.data.hChildren;
    const hProperties = from.data.hProperties;
    if (typeof hName === "string") {
      if (result.type === "element") {
        result.tagName = hName;
      } else {
        const children2 = "children" in result ? result.children : [result];
        result = { type: "element", tagName: hName, properties: {}, children: children2 };
      }
    }
    if (result.type === "element" && hProperties) {
      Object.assign(result.properties, esm_default(hProperties));
    }
    if ("children" in result && result.children && hChildren !== null && hChildren !== void 0) {
      result.children = hChildren;
    }
  }
  return result;
}
function defaultUnknownHandler(state2, node2) {
  const data = node2.data || {};
  const result = "value" in node2 && !(own7.call(data, "hProperties") || own7.call(data, "hChildren")) ? { type: "text", value: node2.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: state2.all(node2)
  };
  state2.patch(node2, result);
  return state2.applyData(node2, result);
}
function wrap2(nodes, loose) {
  const result = [];
  let index11 = -1;
  if (loose) {
    result.push({ type: "text", value: "\n" });
  }
  while (++index11 < nodes.length) {
    if (index11) result.push({ type: "text", value: "\n" });
    result.push(nodes[index11]);
  }
  if (loose && nodes.length > 0) {
    result.push({ type: "text", value: "\n" });
  }
  return result;
}
function trimMarkdownSpaceStart(value) {
  let index11 = 0;
  let code3 = value.charCodeAt(index11);
  while (code3 === 9 || code3 === 32) {
    index11++;
    code3 = value.charCodeAt(index11);
  }
  return value.slice(index11);
}
var own7, emptyOptions2;
var init_state = __esm({
  "node_modules/mdast-util-to-hast/lib/state.js"() {
    init_esm();
    init_unist_util_visit();
    init_unist_util_position();
    init_handlers();
    own7 = {}.hasOwnProperty;
    emptyOptions2 = {};
  }
});

// node_modules/mdast-util-to-hast/lib/index.js
function toHast(tree, options2) {
  const state2 = createState(tree, options2);
  const node2 = state2.one(tree, void 0);
  const foot = footer(state2);
  const result = Array.isArray(node2) ? { type: "root", children: node2 } : node2 || { type: "root", children: [] };
  if (foot) {
    ok2("children" in result);
    result.children.push({ type: "text", value: "\n" }, foot);
  }
  return result;
}
var init_lib17 = __esm({
  "node_modules/mdast-util-to-hast/lib/index.js"() {
    init_default();
    init_footer();
    init_state();
  }
});

// node_modules/mdast-util-to-hast/index.js
var init_mdast_util_to_hast = __esm({
  "node_modules/mdast-util-to-hast/index.js"() {
    init_lib17();
  }
});

// node_modules/html-void-elements/index.js
var htmlVoidElements;
var init_html_void_elements = __esm({
  "node_modules/html-void-elements/index.js"() {
    htmlVoidElements = [
      "area",
      "base",
      "basefont",
      "bgsound",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "image",
      "img",
      "input",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ];
  }
});

// node_modules/property-information/lib/util/schema.js
var Schema;
var init_schema2 = __esm({
  "node_modules/property-information/lib/util/schema.js"() {
    Schema = class {
      /**
       * @param {SchemaType['property']} property
       *   Property.
       * @param {SchemaType['normal']} normal
       *   Normal.
       * @param {Space | undefined} [space]
       *   Space.
       * @returns
       *   Schema.
       */
      constructor(property, normal, space2) {
        this.normal = normal;
        this.property = property;
        if (space2) {
          this.space = space2;
        }
      }
    };
    Schema.prototype.normal = {};
    Schema.prototype.property = {};
    Schema.prototype.space = void 0;
  }
});

// node_modules/property-information/lib/util/merge.js
function merge(definitions, space2) {
  const property = {};
  const normal = {};
  for (const definition3 of definitions) {
    Object.assign(property, definition3.property);
    Object.assign(normal, definition3.normal);
  }
  return new Schema(property, normal, space2);
}
var init_merge = __esm({
  "node_modules/property-information/lib/util/merge.js"() {
    init_schema2();
  }
});

// node_modules/property-information/lib/normalize.js
function normalize2(value) {
  return value.toLowerCase();
}
var init_normalize = __esm({
  "node_modules/property-information/lib/normalize.js"() {
  }
});

// node_modules/property-information/lib/util/info.js
var Info;
var init_info = __esm({
  "node_modules/property-information/lib/util/info.js"() {
    Info = class {
      /**
       * @param {string} property
       *   Property.
       * @param {string} attribute
       *   Attribute.
       * @returns
       *   Info.
       */
      constructor(property, attribute) {
        this.attribute = attribute;
        this.property = property;
      }
    };
    Info.prototype.attribute = "";
    Info.prototype.booleanish = false;
    Info.prototype.boolean = false;
    Info.prototype.commaOrSpaceSeparated = false;
    Info.prototype.commaSeparated = false;
    Info.prototype.defined = false;
    Info.prototype.mustUseProperty = false;
    Info.prototype.number = false;
    Info.prototype.overloadedBoolean = false;
    Info.prototype.property = "";
    Info.prototype.spaceSeparated = false;
    Info.prototype.space = void 0;
  }
});

// node_modules/property-information/lib/util/types.js
var types_exports = {};
__export(types_exports, {
  boolean: () => boolean,
  booleanish: () => booleanish,
  commaOrSpaceSeparated: () => commaOrSpaceSeparated,
  commaSeparated: () => commaSeparated,
  number: () => number,
  overloadedBoolean: () => overloadedBoolean,
  spaceSeparated: () => spaceSeparated
});
function increment2() {
  return 2 ** ++powers;
}
var powers, boolean, booleanish, overloadedBoolean, number, spaceSeparated, commaSeparated, commaOrSpaceSeparated;
var init_types2 = __esm({
  "node_modules/property-information/lib/util/types.js"() {
    powers = 0;
    boolean = increment2();
    booleanish = increment2();
    overloadedBoolean = increment2();
    number = increment2();
    spaceSeparated = increment2();
    commaSeparated = increment2();
    commaOrSpaceSeparated = increment2();
  }
});

// node_modules/property-information/lib/util/defined-info.js
function mark(values, key3, value) {
  if (value) {
    values[key3] = value;
  }
}
var checks, DefinedInfo;
var init_defined_info = __esm({
  "node_modules/property-information/lib/util/defined-info.js"() {
    init_info();
    init_types2();
    checks = /** @type {ReadonlyArray<keyof typeof types>} */
    Object.keys(types_exports);
    DefinedInfo = class extends Info {
      /**
       * @constructor
       * @param {string} property
       *   Property.
       * @param {string} attribute
       *   Attribute.
       * @param {number | null | undefined} [mask]
       *   Mask.
       * @param {Space | undefined} [space]
       *   Space.
       * @returns
       *   Info.
       */
      constructor(property, attribute, mask, space2) {
        let index11 = -1;
        super(property, attribute);
        mark(this, "space", space2);
        if (typeof mask === "number") {
          while (++index11 < checks.length) {
            const check = checks[index11];
            mark(this, checks[index11], (mask & types_exports[check]) === types_exports[check]);
          }
        }
      }
    };
    DefinedInfo.prototype.defined = true;
  }
});

// node_modules/property-information/lib/util/create.js
function create(definition3) {
  const properties2 = {};
  const normals = {};
  for (const [property, value] of Object.entries(definition3.properties)) {
    const info = new DefinedInfo(
      property,
      definition3.transform(definition3.attributes || {}, property),
      value,
      definition3.space
    );
    if (definition3.mustUseProperty && definition3.mustUseProperty.includes(property)) {
      info.mustUseProperty = true;
    }
    properties2[property] = info;
    normals[normalize2(property)] = property;
    normals[normalize2(info.attribute)] = property;
  }
  return new Schema(properties2, normals, definition3.space);
}
var init_create = __esm({
  "node_modules/property-information/lib/util/create.js"() {
    init_normalize();
    init_defined_info();
    init_schema2();
  }
});

// node_modules/property-information/lib/aria.js
var aria2;
var init_aria = __esm({
  "node_modules/property-information/lib/aria.js"() {
    init_create();
    init_types2();
    aria2 = create({
      properties: {
        ariaActiveDescendant: null,
        ariaAtomic: booleanish,
        ariaAutoComplete: null,
        ariaBusy: booleanish,
        ariaChecked: booleanish,
        ariaColCount: number,
        ariaColIndex: number,
        ariaColSpan: number,
        ariaControls: spaceSeparated,
        ariaCurrent: null,
        ariaDescribedBy: spaceSeparated,
        ariaDetails: null,
        ariaDisabled: booleanish,
        ariaDropEffect: spaceSeparated,
        ariaErrorMessage: null,
        ariaExpanded: booleanish,
        ariaFlowTo: spaceSeparated,
        ariaGrabbed: booleanish,
        ariaHasPopup: null,
        ariaHidden: booleanish,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: spaceSeparated,
        ariaLevel: number,
        ariaLive: null,
        ariaModal: booleanish,
        ariaMultiLine: booleanish,
        ariaMultiSelectable: booleanish,
        ariaOrientation: null,
        ariaOwns: spaceSeparated,
        ariaPlaceholder: null,
        ariaPosInSet: number,
        ariaPressed: booleanish,
        ariaReadOnly: booleanish,
        ariaRelevant: null,
        ariaRequired: booleanish,
        ariaRoleDescription: spaceSeparated,
        ariaRowCount: number,
        ariaRowIndex: number,
        ariaRowSpan: number,
        ariaSelected: booleanish,
        ariaSetSize: number,
        ariaSort: null,
        ariaValueMax: number,
        ariaValueMin: number,
        ariaValueNow: number,
        ariaValueText: null,
        role: null
      },
      transform(_, property) {
        return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
      }
    });
  }
});

// node_modules/property-information/lib/util/case-sensitive-transform.js
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}
var init_case_sensitive_transform = __esm({
  "node_modules/property-information/lib/util/case-sensitive-transform.js"() {
  }
});

// node_modules/property-information/lib/util/case-insensitive-transform.js
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}
var init_case_insensitive_transform = __esm({
  "node_modules/property-information/lib/util/case-insensitive-transform.js"() {
    init_case_sensitive_transform();
  }
});

// node_modules/property-information/lib/html.js
var html4;
var init_html4 = __esm({
  "node_modules/property-information/lib/html.js"() {
    init_case_insensitive_transform();
    init_create();
    init_types2();
    html4 = create({
      attributes: {
        acceptcharset: "accept-charset",
        classname: "class",
        htmlfor: "for",
        httpequiv: "http-equiv"
      },
      mustUseProperty: ["checked", "multiple", "muted", "selected"],
      properties: {
        // Standard Properties.
        abbr: null,
        accept: commaSeparated,
        acceptCharset: spaceSeparated,
        accessKey: spaceSeparated,
        action: null,
        allow: null,
        allowFullScreen: boolean,
        allowPaymentRequest: boolean,
        allowUserMedia: boolean,
        alt: null,
        as: null,
        async: boolean,
        autoCapitalize: null,
        autoComplete: spaceSeparated,
        autoFocus: boolean,
        autoPlay: boolean,
        blocking: spaceSeparated,
        capture: null,
        charSet: null,
        checked: boolean,
        cite: null,
        className: spaceSeparated,
        cols: number,
        colSpan: null,
        content: null,
        contentEditable: booleanish,
        controls: boolean,
        controlsList: spaceSeparated,
        coords: number | commaSeparated,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: boolean,
        defer: boolean,
        dir: null,
        dirName: null,
        disabled: boolean,
        download: overloadedBoolean,
        draggable: booleanish,
        encType: null,
        enterKeyHint: null,
        fetchPriority: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: boolean,
        formTarget: null,
        headers: spaceSeparated,
        height: number,
        hidden: overloadedBoolean,
        high: number,
        href: null,
        hrefLang: null,
        htmlFor: spaceSeparated,
        httpEquiv: spaceSeparated,
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inert: boolean,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: boolean,
        itemId: null,
        itemProp: spaceSeparated,
        itemRef: spaceSeparated,
        itemScope: boolean,
        itemType: spaceSeparated,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: boolean,
        low: number,
        manifest: null,
        max: null,
        maxLength: number,
        media: null,
        method: null,
        min: null,
        minLength: number,
        multiple: boolean,
        muted: boolean,
        name: null,
        nonce: null,
        noModule: boolean,
        noValidate: boolean,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforeMatch: null,
        onBeforePrint: null,
        onBeforeToggle: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onScrollEnd: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: boolean,
        optimum: number,
        pattern: null,
        ping: spaceSeparated,
        placeholder: null,
        playsInline: boolean,
        popover: null,
        popoverTarget: null,
        popoverTargetAction: null,
        poster: null,
        preload: null,
        readOnly: boolean,
        referrerPolicy: null,
        rel: spaceSeparated,
        required: boolean,
        reversed: boolean,
        rows: number,
        rowSpan: number,
        sandbox: spaceSeparated,
        scope: null,
        scoped: boolean,
        seamless: boolean,
        selected: boolean,
        shadowRootClonable: boolean,
        shadowRootDelegatesFocus: boolean,
        shadowRootMode: null,
        shape: null,
        size: number,
        sizes: null,
        slot: null,
        span: number,
        spellCheck: booleanish,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: number,
        step: null,
        style: null,
        tabIndex: number,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: boolean,
        useMap: null,
        value: booleanish,
        width: number,
        wrap: null,
        writingSuggestions: null,
        // Legacy.
        // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
        align: null,
        // Several. Use CSS `text-align` instead,
        aLink: null,
        // `<body>`. Use CSS `a:active {color}` instead
        archive: spaceSeparated,
        // `<object>`. List of URIs to archives
        axis: null,
        // `<td>` and `<th>`. Use `scope` on `<th>`
        background: null,
        // `<body>`. Use CSS `background-image` instead
        bgColor: null,
        // `<body>` and table elements. Use CSS `background-color` instead
        border: number,
        // `<table>`. Use CSS `border-width` instead,
        borderColor: null,
        // `<table>`. Use CSS `border-color` instead,
        bottomMargin: number,
        // `<body>`
        cellPadding: null,
        // `<table>`
        cellSpacing: null,
        // `<table>`
        char: null,
        // Several table elements. When `align=char`, sets the character to align on
        charOff: null,
        // Several table elements. When `char`, offsets the alignment
        classId: null,
        // `<object>`
        clear: null,
        // `<br>`. Use CSS `clear` instead
        code: null,
        // `<object>`
        codeBase: null,
        // `<object>`
        codeType: null,
        // `<object>`
        color: null,
        // `<font>` and `<hr>`. Use CSS instead
        compact: boolean,
        // Lists. Use CSS to reduce space between items instead
        declare: boolean,
        // `<object>`
        event: null,
        // `<script>`
        face: null,
        // `<font>`. Use CSS instead
        frame: null,
        // `<table>`
        frameBorder: null,
        // `<iframe>`. Use CSS `border` instead
        hSpace: number,
        // `<img>` and `<object>`
        leftMargin: number,
        // `<body>`
        link: null,
        // `<body>`. Use CSS `a:link {color: *}` instead
        longDesc: null,
        // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
        lowSrc: null,
        // `<img>`. Use a `<picture>`
        marginHeight: number,
        // `<body>`
        marginWidth: number,
        // `<body>`
        noResize: boolean,
        // `<frame>`
        noHref: boolean,
        // `<area>`. Use no href instead of an explicit `nohref`
        noShade: boolean,
        // `<hr>`. Use background-color and height instead of borders
        noWrap: boolean,
        // `<td>` and `<th>`
        object: null,
        // `<applet>`
        profile: null,
        // `<head>`
        prompt: null,
        // `<isindex>`
        rev: null,
        // `<link>`
        rightMargin: number,
        // `<body>`
        rules: null,
        // `<table>`
        scheme: null,
        // `<meta>`
        scrolling: booleanish,
        // `<frame>`. Use overflow in the child context
        standby: null,
        // `<object>`
        summary: null,
        // `<table>`
        text: null,
        // `<body>`. Use CSS `color` instead
        topMargin: number,
        // `<body>`
        valueType: null,
        // `<param>`
        version: null,
        // `<html>`. Use a doctype.
        vAlign: null,
        // Several. Use CSS `vertical-align` instead
        vLink: null,
        // `<body>`. Use CSS `a:visited {color}` instead
        vSpace: number,
        // `<img>` and `<object>`
        // Non-standard Properties.
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: boolean,
        disableRemotePlayback: boolean,
        prefix: null,
        property: null,
        results: number,
        security: null,
        unselectable: null
      },
      space: "html",
      transform: caseInsensitiveTransform
    });
  }
});

// node_modules/property-information/lib/svg.js
var svg;
var init_svg = __esm({
  "node_modules/property-information/lib/svg.js"() {
    init_case_sensitive_transform();
    init_create();
    init_types2();
    svg = create({
      attributes: {
        accentHeight: "accent-height",
        alignmentBaseline: "alignment-baseline",
        arabicForm: "arabic-form",
        baselineShift: "baseline-shift",
        capHeight: "cap-height",
        className: "class",
        clipPath: "clip-path",
        clipRule: "clip-rule",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        crossOrigin: "crossorigin",
        dataType: "datatype",
        dominantBaseline: "dominant-baseline",
        enableBackground: "enable-background",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        hrefLang: "hreflang",
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        horizOriginY: "horiz-origin-y",
        imageRendering: "image-rendering",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        navDown: "nav-down",
        navDownLeft: "nav-down-left",
        navDownRight: "nav-down-right",
        navLeft: "nav-left",
        navNext: "nav-next",
        navPrev: "nav-prev",
        navRight: "nav-right",
        navUp: "nav-up",
        navUpLeft: "nav-up-left",
        navUpRight: "nav-up-right",
        onAbort: "onabort",
        onActivate: "onactivate",
        onAfterPrint: "onafterprint",
        onBeforePrint: "onbeforeprint",
        onBegin: "onbegin",
        onCancel: "oncancel",
        onCanPlay: "oncanplay",
        onCanPlayThrough: "oncanplaythrough",
        onChange: "onchange",
        onClick: "onclick",
        onClose: "onclose",
        onCopy: "oncopy",
        onCueChange: "oncuechange",
        onCut: "oncut",
        onDblClick: "ondblclick",
        onDrag: "ondrag",
        onDragEnd: "ondragend",
        onDragEnter: "ondragenter",
        onDragExit: "ondragexit",
        onDragLeave: "ondragleave",
        onDragOver: "ondragover",
        onDragStart: "ondragstart",
        onDrop: "ondrop",
        onDurationChange: "ondurationchange",
        onEmptied: "onemptied",
        onEnd: "onend",
        onEnded: "onended",
        onError: "onerror",
        onFocus: "onfocus",
        onFocusIn: "onfocusin",
        onFocusOut: "onfocusout",
        onHashChange: "onhashchange",
        onInput: "oninput",
        onInvalid: "oninvalid",
        onKeyDown: "onkeydown",
        onKeyPress: "onkeypress",
        onKeyUp: "onkeyup",
        onLoad: "onload",
        onLoadedData: "onloadeddata",
        onLoadedMetadata: "onloadedmetadata",
        onLoadStart: "onloadstart",
        onMessage: "onmessage",
        onMouseDown: "onmousedown",
        onMouseEnter: "onmouseenter",
        onMouseLeave: "onmouseleave",
        onMouseMove: "onmousemove",
        onMouseOut: "onmouseout",
        onMouseOver: "onmouseover",
        onMouseUp: "onmouseup",
        onMouseWheel: "onmousewheel",
        onOffline: "onoffline",
        onOnline: "ononline",
        onPageHide: "onpagehide",
        onPageShow: "onpageshow",
        onPaste: "onpaste",
        onPause: "onpause",
        onPlay: "onplay",
        onPlaying: "onplaying",
        onPopState: "onpopstate",
        onProgress: "onprogress",
        onRateChange: "onratechange",
        onRepeat: "onrepeat",
        onReset: "onreset",
        onResize: "onresize",
        onScroll: "onscroll",
        onSeeked: "onseeked",
        onSeeking: "onseeking",
        onSelect: "onselect",
        onShow: "onshow",
        onStalled: "onstalled",
        onStorage: "onstorage",
        onSubmit: "onsubmit",
        onSuspend: "onsuspend",
        onTimeUpdate: "ontimeupdate",
        onToggle: "ontoggle",
        onUnload: "onunload",
        onVolumeChange: "onvolumechange",
        onWaiting: "onwaiting",
        onZoom: "onzoom",
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pointerEvents: "pointer-events",
        referrerPolicy: "referrerpolicy",
        renderingIntent: "rendering-intent",
        shapeRendering: "shape-rendering",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        strokeDashArray: "stroke-dasharray",
        strokeDashOffset: "stroke-dashoffset",
        strokeLineCap: "stroke-linecap",
        strokeLineJoin: "stroke-linejoin",
        strokeMiterLimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        tabIndex: "tabindex",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        transformOrigin: "transform-origin",
        typeOf: "typeof",
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        vectorEffect: "vector-effect",
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        xHeight: "x-height",
        // These were camelcased in Tiny. Now lowercased in SVG 2
        playbackOrder: "playbackorder",
        timelineBegin: "timelinebegin"
      },
      properties: {
        about: commaOrSpaceSeparated,
        accentHeight: number,
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: number,
        amplitude: number,
        arabicForm: null,
        ascent: number,
        attributeName: null,
        attributeType: null,
        azimuth: number,
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: number,
        by: null,
        calcMode: null,
        capHeight: number,
        className: spaceSeparated,
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: number,
        diffuseConstant: number,
        direction: null,
        display: null,
        dur: null,
        divisor: number,
        dominantBaseline: null,
        download: boolean,
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: number,
        enableBackground: null,
        end: null,
        event: null,
        exponent: number,
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: number,
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: commaSeparated,
        g2: commaSeparated,
        glyphName: commaSeparated,
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: number,
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: number,
        horizOriginX: number,
        horizOriginY: number,
        id: null,
        ideographic: number,
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: number,
        k: number,
        k1: number,
        k2: number,
        k3: number,
        k4: number,
        kernelMatrix: commaOrSpaceSeparated,
        kernelUnitLength: null,
        keyPoints: null,
        // SEMI_COLON_SEPARATED
        keySplines: null,
        // SEMI_COLON_SEPARATED
        keyTimes: null,
        // SEMI_COLON_SEPARATED
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: number,
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: number,
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: number,
        overlineThickness: number,
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: number,
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: spaceSeparated,
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: number,
        pointsAtY: number,
        pointsAtZ: number,
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: commaOrSpaceSeparated,
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: commaOrSpaceSeparated,
        rev: commaOrSpaceSeparated,
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: commaOrSpaceSeparated,
        requiredFeatures: commaOrSpaceSeparated,
        requiredFonts: commaOrSpaceSeparated,
        requiredFormats: commaOrSpaceSeparated,
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: number,
        specularExponent: number,
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: number,
        strikethroughThickness: number,
        string: null,
        stroke: null,
        strokeDashArray: commaOrSpaceSeparated,
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: number,
        strokeOpacity: number,
        strokeWidth: null,
        style: null,
        surfaceScale: number,
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: commaOrSpaceSeparated,
        tabIndex: number,
        tableValues: null,
        target: null,
        targetX: number,
        targetY: number,
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: commaOrSpaceSeparated,
        to: null,
        transform: null,
        transformOrigin: null,
        u1: null,
        u2: null,
        underlinePosition: number,
        underlineThickness: number,
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: number,
        values: null,
        vAlphabetic: number,
        vMathematical: number,
        vectorEffect: null,
        vHanging: number,
        vIdeographic: number,
        version: null,
        vertAdvY: number,
        vertOriginX: number,
        vertOriginY: number,
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: number,
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
      },
      space: "svg",
      transform: caseSensitiveTransform
    });
  }
});

// node_modules/property-information/lib/xlink.js
var xlink;
var init_xlink = __esm({
  "node_modules/property-information/lib/xlink.js"() {
    init_create();
    xlink = create({
      properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
      },
      space: "xlink",
      transform(_, property) {
        return "xlink:" + property.slice(5).toLowerCase();
      }
    });
  }
});

// node_modules/property-information/lib/xmlns.js
var xmlns;
var init_xmlns = __esm({
  "node_modules/property-information/lib/xmlns.js"() {
    init_create();
    init_case_insensitive_transform();
    xmlns = create({
      attributes: { xmlnsxlink: "xmlns:xlink" },
      properties: { xmlnsXLink: null, xmlns: null },
      space: "xmlns",
      transform: caseInsensitiveTransform
    });
  }
});

// node_modules/property-information/lib/xml.js
var xml;
var init_xml = __esm({
  "node_modules/property-information/lib/xml.js"() {
    init_create();
    xml = create({
      properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
      space: "xml",
      transform(_, property) {
        return "xml:" + property.slice(3).toLowerCase();
      }
    });
  }
});

// node_modules/property-information/lib/find.js
function find(schema, value) {
  const normal = normalize2(value);
  let property = value;
  let Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      const rest = value.slice(5).replace(dash, camelcase);
      property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      const rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        if (dashes.charAt(0) !== "-") {
          dashes = "-" + dashes;
        }
        value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(property, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}
var cap, dash, valid;
var init_find = __esm({
  "node_modules/property-information/lib/find.js"() {
    init_defined_info();
    init_info();
    init_normalize();
    cap = /[A-Z]/g;
    dash = /-[a-z]/g;
    valid = /^data[-\w.:]+$/i;
  }
});

// node_modules/property-information/index.js
var html5, svg2;
var init_property_information = __esm({
  "node_modules/property-information/index.js"() {
    init_merge();
    init_aria();
    init_html4();
    init_svg();
    init_xlink();
    init_xmlns();
    init_xml();
    init_find();
    html5 = merge([aria2, html4, xlink, xmlns, xml], "html");
    svg2 = merge([aria2, svg, xlink, xmlns, xml], "svg");
  }
});

// node_modules/stringify-entities/lib/core.js
function core(value, options2) {
  value = value.replace(
    options2.subset ? charactersToExpressionCached(options2.subset) : defaultSubsetRegex,
    basic
  );
  if (options2.subset || options2.escapeOnly) {
    return value;
  }
  return value.replace(surrogatePairsRegex, surrogate).replace(controlCharactersRegex, basic);
  function surrogate(pair, index11, all3) {
    return options2.format(
      (pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536,
      all3.charCodeAt(index11 + 2),
      options2
    );
  }
  function basic(character, index11, all3) {
    return options2.format(
      character.charCodeAt(0),
      all3.charCodeAt(index11 + 1),
      options2
    );
  }
}
function charactersToExpressionCached(subset) {
  let cached = subsetToRegexCache.get(subset);
  if (!cached) {
    cached = charactersToExpression(subset);
    subsetToRegexCache.set(subset, cached);
  }
  return cached;
}
function charactersToExpression(subset) {
  const groups = [];
  let index11 = -1;
  while (++index11 < subset.length) {
    groups.push(subset[index11].replace(regexEscapeRegex, "\\$&"));
  }
  return new RegExp("(?:" + groups.join("|") + ")", "g");
}
var defaultSubsetRegex, surrogatePairsRegex, controlCharactersRegex, regexEscapeRegex, subsetToRegexCache;
var init_core = __esm({
  "node_modules/stringify-entities/lib/core.js"() {
    defaultSubsetRegex = /["&'<>`]/g;
    surrogatePairsRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    controlCharactersRegex = // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
    /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
    regexEscapeRegex = /[|\\{}()[\]^$+*?.]/g;
    subsetToRegexCache = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/stringify-entities/lib/util/to-hexadecimal.js
function toHexadecimal(code3, next, omit) {
  const value = "&#x" + code3.toString(16).toUpperCase();
  return omit && next && !hexadecimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
}
var hexadecimalRegex;
var init_to_hexadecimal = __esm({
  "node_modules/stringify-entities/lib/util/to-hexadecimal.js"() {
    hexadecimalRegex = /[\dA-Fa-f]/;
  }
});

// node_modules/stringify-entities/lib/util/to-decimal.js
function toDecimal(code3, next, omit) {
  const value = "&#" + String(code3);
  return omit && next && !decimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
}
var decimalRegex;
var init_to_decimal = __esm({
  "node_modules/stringify-entities/lib/util/to-decimal.js"() {
    decimalRegex = /\d/;
  }
});

// node_modules/character-entities-legacy/index.js
var characterEntitiesLegacy;
var init_character_entities_legacy = __esm({
  "node_modules/character-entities-legacy/index.js"() {
    characterEntitiesLegacy = [
      "AElig",
      "AMP",
      "Aacute",
      "Acirc",
      "Agrave",
      "Aring",
      "Atilde",
      "Auml",
      "COPY",
      "Ccedil",
      "ETH",
      "Eacute",
      "Ecirc",
      "Egrave",
      "Euml",
      "GT",
      "Iacute",
      "Icirc",
      "Igrave",
      "Iuml",
      "LT",
      "Ntilde",
      "Oacute",
      "Ocirc",
      "Ograve",
      "Oslash",
      "Otilde",
      "Ouml",
      "QUOT",
      "REG",
      "THORN",
      "Uacute",
      "Ucirc",
      "Ugrave",
      "Uuml",
      "Yacute",
      "aacute",
      "acirc",
      "acute",
      "aelig",
      "agrave",
      "amp",
      "aring",
      "atilde",
      "auml",
      "brvbar",
      "ccedil",
      "cedil",
      "cent",
      "copy",
      "curren",
      "deg",
      "divide",
      "eacute",
      "ecirc",
      "egrave",
      "eth",
      "euml",
      "frac12",
      "frac14",
      "frac34",
      "gt",
      "iacute",
      "icirc",
      "iexcl",
      "igrave",
      "iquest",
      "iuml",
      "laquo",
      "lt",
      "macr",
      "micro",
      "middot",
      "nbsp",
      "not",
      "ntilde",
      "oacute",
      "ocirc",
      "ograve",
      "ordf",
      "ordm",
      "oslash",
      "otilde",
      "ouml",
      "para",
      "plusmn",
      "pound",
      "quot",
      "raquo",
      "reg",
      "sect",
      "shy",
      "sup1",
      "sup2",
      "sup3",
      "szlig",
      "thorn",
      "times",
      "uacute",
      "ucirc",
      "ugrave",
      "uml",
      "uuml",
      "yacute",
      "yen",
      "yuml"
    ];
  }
});

// node_modules/character-entities-html4/index.js
var characterEntitiesHtml4;
var init_character_entities_html4 = __esm({
  "node_modules/character-entities-html4/index.js"() {
    characterEntitiesHtml4 = {
      nbsp: "\xA0",
      iexcl: "\xA1",
      cent: "\xA2",
      pound: "\xA3",
      curren: "\xA4",
      yen: "\xA5",
      brvbar: "\xA6",
      sect: "\xA7",
      uml: "\xA8",
      copy: "\xA9",
      ordf: "\xAA",
      laquo: "\xAB",
      not: "\xAC",
      shy: "\xAD",
      reg: "\xAE",
      macr: "\xAF",
      deg: "\xB0",
      plusmn: "\xB1",
      sup2: "\xB2",
      sup3: "\xB3",
      acute: "\xB4",
      micro: "\xB5",
      para: "\xB6",
      middot: "\xB7",
      cedil: "\xB8",
      sup1: "\xB9",
      ordm: "\xBA",
      raquo: "\xBB",
      frac14: "\xBC",
      frac12: "\xBD",
      frac34: "\xBE",
      iquest: "\xBF",
      Agrave: "\xC0",
      Aacute: "\xC1",
      Acirc: "\xC2",
      Atilde: "\xC3",
      Auml: "\xC4",
      Aring: "\xC5",
      AElig: "\xC6",
      Ccedil: "\xC7",
      Egrave: "\xC8",
      Eacute: "\xC9",
      Ecirc: "\xCA",
      Euml: "\xCB",
      Igrave: "\xCC",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Iuml: "\xCF",
      ETH: "\xD0",
      Ntilde: "\xD1",
      Ograve: "\xD2",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Otilde: "\xD5",
      Ouml: "\xD6",
      times: "\xD7",
      Oslash: "\xD8",
      Ugrave: "\xD9",
      Uacute: "\xDA",
      Ucirc: "\xDB",
      Uuml: "\xDC",
      Yacute: "\xDD",
      THORN: "\xDE",
      szlig: "\xDF",
      agrave: "\xE0",
      aacute: "\xE1",
      acirc: "\xE2",
      atilde: "\xE3",
      auml: "\xE4",
      aring: "\xE5",
      aelig: "\xE6",
      ccedil: "\xE7",
      egrave: "\xE8",
      eacute: "\xE9",
      ecirc: "\xEA",
      euml: "\xEB",
      igrave: "\xEC",
      iacute: "\xED",
      icirc: "\xEE",
      iuml: "\xEF",
      eth: "\xF0",
      ntilde: "\xF1",
      ograve: "\xF2",
      oacute: "\xF3",
      ocirc: "\xF4",
      otilde: "\xF5",
      ouml: "\xF6",
      divide: "\xF7",
      oslash: "\xF8",
      ugrave: "\xF9",
      uacute: "\xFA",
      ucirc: "\xFB",
      uuml: "\xFC",
      yacute: "\xFD",
      thorn: "\xFE",
      yuml: "\xFF",
      fnof: "\u0192",
      Alpha: "\u0391",
      Beta: "\u0392",
      Gamma: "\u0393",
      Delta: "\u0394",
      Epsilon: "\u0395",
      Zeta: "\u0396",
      Eta: "\u0397",
      Theta: "\u0398",
      Iota: "\u0399",
      Kappa: "\u039A",
      Lambda: "\u039B",
      Mu: "\u039C",
      Nu: "\u039D",
      Xi: "\u039E",
      Omicron: "\u039F",
      Pi: "\u03A0",
      Rho: "\u03A1",
      Sigma: "\u03A3",
      Tau: "\u03A4",
      Upsilon: "\u03A5",
      Phi: "\u03A6",
      Chi: "\u03A7",
      Psi: "\u03A8",
      Omega: "\u03A9",
      alpha: "\u03B1",
      beta: "\u03B2",
      gamma: "\u03B3",
      delta: "\u03B4",
      epsilon: "\u03B5",
      zeta: "\u03B6",
      eta: "\u03B7",
      theta: "\u03B8",
      iota: "\u03B9",
      kappa: "\u03BA",
      lambda: "\u03BB",
      mu: "\u03BC",
      nu: "\u03BD",
      xi: "\u03BE",
      omicron: "\u03BF",
      pi: "\u03C0",
      rho: "\u03C1",
      sigmaf: "\u03C2",
      sigma: "\u03C3",
      tau: "\u03C4",
      upsilon: "\u03C5",
      phi: "\u03C6",
      chi: "\u03C7",
      psi: "\u03C8",
      omega: "\u03C9",
      thetasym: "\u03D1",
      upsih: "\u03D2",
      piv: "\u03D6",
      bull: "\u2022",
      hellip: "\u2026",
      prime: "\u2032",
      Prime: "\u2033",
      oline: "\u203E",
      frasl: "\u2044",
      weierp: "\u2118",
      image: "\u2111",
      real: "\u211C",
      trade: "\u2122",
      alefsym: "\u2135",
      larr: "\u2190",
      uarr: "\u2191",
      rarr: "\u2192",
      darr: "\u2193",
      harr: "\u2194",
      crarr: "\u21B5",
      lArr: "\u21D0",
      uArr: "\u21D1",
      rArr: "\u21D2",
      dArr: "\u21D3",
      hArr: "\u21D4",
      forall: "\u2200",
      part: "\u2202",
      exist: "\u2203",
      empty: "\u2205",
      nabla: "\u2207",
      isin: "\u2208",
      notin: "\u2209",
      ni: "\u220B",
      prod: "\u220F",
      sum: "\u2211",
      minus: "\u2212",
      lowast: "\u2217",
      radic: "\u221A",
      prop: "\u221D",
      infin: "\u221E",
      ang: "\u2220",
      and: "\u2227",
      or: "\u2228",
      cap: "\u2229",
      cup: "\u222A",
      int: "\u222B",
      there4: "\u2234",
      sim: "\u223C",
      cong: "\u2245",
      asymp: "\u2248",
      ne: "\u2260",
      equiv: "\u2261",
      le: "\u2264",
      ge: "\u2265",
      sub: "\u2282",
      sup: "\u2283",
      nsub: "\u2284",
      sube: "\u2286",
      supe: "\u2287",
      oplus: "\u2295",
      otimes: "\u2297",
      perp: "\u22A5",
      sdot: "\u22C5",
      lceil: "\u2308",
      rceil: "\u2309",
      lfloor: "\u230A",
      rfloor: "\u230B",
      lang: "\u2329",
      rang: "\u232A",
      loz: "\u25CA",
      spades: "\u2660",
      clubs: "\u2663",
      hearts: "\u2665",
      diams: "\u2666",
      quot: '"',
      amp: "&",
      lt: "<",
      gt: ">",
      OElig: "\u0152",
      oelig: "\u0153",
      Scaron: "\u0160",
      scaron: "\u0161",
      Yuml: "\u0178",
      circ: "\u02C6",
      tilde: "\u02DC",
      ensp: "\u2002",
      emsp: "\u2003",
      thinsp: "\u2009",
      zwnj: "\u200C",
      zwj: "\u200D",
      lrm: "\u200E",
      rlm: "\u200F",
      ndash: "\u2013",
      mdash: "\u2014",
      lsquo: "\u2018",
      rsquo: "\u2019",
      sbquo: "\u201A",
      ldquo: "\u201C",
      rdquo: "\u201D",
      bdquo: "\u201E",
      dagger: "\u2020",
      Dagger: "\u2021",
      permil: "\u2030",
      lsaquo: "\u2039",
      rsaquo: "\u203A",
      euro: "\u20AC"
    };
  }
});

// node_modules/stringify-entities/lib/constant/dangerous.js
var dangerous;
var init_dangerous = __esm({
  "node_modules/stringify-entities/lib/constant/dangerous.js"() {
    dangerous = [
      "cent",
      "copy",
      "divide",
      "gt",
      "lt",
      "not",
      "para",
      "times"
    ];
  }
});

// node_modules/stringify-entities/lib/util/to-named.js
function toNamed(code3, next, omit, attribute) {
  const character = String.fromCharCode(code3);
  if (own8.call(characters, character)) {
    const name = characters[character];
    const value = "&" + name;
    if (omit && characterEntitiesLegacy.includes(name) && !dangerous.includes(name) && (!attribute || next && next !== 61 && notAlphanumericRegex.test(String.fromCharCode(next)))) {
      return value;
    }
    return value + ";";
  }
  return "";
}
var own8, characters, key2, notAlphanumericRegex;
var init_to_named = __esm({
  "node_modules/stringify-entities/lib/util/to-named.js"() {
    init_character_entities_legacy();
    init_character_entities_html4();
    init_dangerous();
    own8 = {}.hasOwnProperty;
    characters = {};
    for (key2 in characterEntitiesHtml4) {
      if (own8.call(characterEntitiesHtml4, key2)) {
        characters[characterEntitiesHtml4[key2]] = key2;
      }
    }
    notAlphanumericRegex = /[^\dA-Za-z]/;
  }
});

// node_modules/stringify-entities/lib/util/format-smart.js
function formatSmart(code3, next, options2) {
  let numeric = toHexadecimal(code3, next, options2.omitOptionalSemicolons);
  let named;
  if (options2.useNamedReferences || options2.useShortestReferences) {
    named = toNamed(
      code3,
      next,
      options2.omitOptionalSemicolons,
      options2.attribute
    );
  }
  if ((options2.useShortestReferences || !named) && options2.useShortestReferences) {
    const decimal = toDecimal(code3, next, options2.omitOptionalSemicolons);
    if (decimal.length < numeric.length) {
      numeric = decimal;
    }
  }
  return named && (!options2.useShortestReferences || named.length < numeric.length) ? named : numeric;
}
var init_format_smart = __esm({
  "node_modules/stringify-entities/lib/util/format-smart.js"() {
    init_to_hexadecimal();
    init_to_decimal();
    init_to_named();
  }
});

// node_modules/stringify-entities/lib/index.js
function stringifyEntities(value, options2) {
  return core(value, Object.assign({ format: formatSmart }, options2));
}
var init_lib18 = __esm({
  "node_modules/stringify-entities/lib/index.js"() {
    init_core();
    init_format_smart();
  }
});

// node_modules/stringify-entities/index.js
var init_stringify_entities = __esm({
  "node_modules/stringify-entities/index.js"() {
    init_lib18();
  }
});

// node_modules/hast-util-to-html/lib/handle/comment.js
function comment2(node2, _1, _2, state2) {
  return state2.settings.bogusComments ? "<?" + stringifyEntities(
    node2.value,
    Object.assign({}, state2.settings.characterReferences, {
      subset: bogusCommentEntitySubset
    })
  ) + ">" : "<!--" + node2.value.replace(htmlCommentRegex, encode2) + "-->";
  function encode2($0) {
    return stringifyEntities(
      $0,
      Object.assign({}, state2.settings.characterReferences, {
        subset: commentEntitySubset
      })
    );
  }
}
var htmlCommentRegex, bogusCommentEntitySubset, commentEntitySubset;
var init_comment = __esm({
  "node_modules/hast-util-to-html/lib/handle/comment.js"() {
    init_stringify_entities();
    htmlCommentRegex = /^>|^->|<!--|-->|--!>|<!-$/g;
    bogusCommentEntitySubset = [">"];
    commentEntitySubset = ["<", ">"];
  }
});

// node_modules/hast-util-to-html/lib/handle/doctype.js
function doctype2(_1, _2, _3, state2) {
  return "<!" + (state2.settings.upperDoctype ? "DOCTYPE" : "doctype") + (state2.settings.tightDoctype ? "" : " ") + "html>";
}
var init_doctype = __esm({
  "node_modules/hast-util-to-html/lib/handle/doctype.js"() {
  }
});

// node_modules/ccount/index.js
function ccount(value, character) {
  const source2 = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count = 0;
  let index11 = source2.indexOf(character);
  while (index11 !== -1) {
    count++;
    index11 = source2.indexOf(character, index11 + character.length);
  }
  return count;
}
var init_ccount = __esm({
  "node_modules/ccount/index.js"() {
  }
});

// node_modules/comma-separated-tokens/index.js
function stringify3(values, options2) {
  const settings = options2 || {};
  const input = values[values.length - 1] === "" ? [...values, ""] : values;
  return input.join(
    (settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")
  ).trim();
}
var init_comma_separated_tokens = __esm({
  "node_modules/comma-separated-tokens/index.js"() {
  }
});

// node_modules/space-separated-tokens/index.js
function stringify4(values) {
  return values.join(" ").trim();
}
var init_space_separated_tokens = __esm({
  "node_modules/space-separated-tokens/index.js"() {
  }
});

// node_modules/hast-util-whitespace/lib/index.js
function whitespace(thing) {
  return typeof thing === "object" ? thing.type === "text" ? empty2(thing.value) : false : empty2(thing);
}
function empty2(value) {
  return value.replace(re, "") === "";
}
var re;
var init_lib19 = __esm({
  "node_modules/hast-util-whitespace/lib/index.js"() {
    re = /[ \t\n\f\r]/g;
  }
});

// node_modules/hast-util-whitespace/index.js
var init_hast_util_whitespace = __esm({
  "node_modules/hast-util-whitespace/index.js"() {
    init_lib19();
  }
});

// node_modules/hast-util-to-html/lib/omission/util/siblings.js
function siblings(increment3) {
  return sibling;
  function sibling(parent, index11, includeWhitespace) {
    const siblings2 = parent ? parent.children : emptyChildren;
    let offset = (index11 || 0) + increment3;
    let next = siblings2[offset];
    if (!includeWhitespace) {
      while (next && whitespace(next)) {
        offset += increment3;
        next = siblings2[offset];
      }
    }
    return next;
  }
}
var siblingAfter, siblingBefore, emptyChildren;
var init_siblings = __esm({
  "node_modules/hast-util-to-html/lib/omission/util/siblings.js"() {
    init_hast_util_whitespace();
    siblingAfter = siblings(1);
    siblingBefore = siblings(-1);
    emptyChildren = [];
  }
});

// node_modules/hast-util-to-html/lib/omission/omission.js
function omission(handlers2) {
  return omit;
  function omit(node2, index11, parent) {
    return own9.call(handlers2, node2.tagName) && handlers2[node2.tagName](node2, index11, parent);
  }
}
var own9;
var init_omission = __esm({
  "node_modules/hast-util-to-html/lib/omission/omission.js"() {
    own9 = {}.hasOwnProperty;
  }
});

// node_modules/hast-util-to-html/lib/omission/closing.js
function headOrColgroupOrCaption(_, index11, parent) {
  const next = siblingAfter(parent, index11, true);
  return !next || next.type !== "comment" && !(next.type === "text" && whitespace(next.value.charAt(0)));
}
function html6(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return !next || next.type !== "comment";
}
function body2(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return !next || next.type !== "comment";
}
function p(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return next ? next.type === "element" && (next.tagName === "address" || next.tagName === "article" || next.tagName === "aside" || next.tagName === "blockquote" || next.tagName === "details" || next.tagName === "div" || next.tagName === "dl" || next.tagName === "fieldset" || next.tagName === "figcaption" || next.tagName === "figure" || next.tagName === "footer" || next.tagName === "form" || next.tagName === "h1" || next.tagName === "h2" || next.tagName === "h3" || next.tagName === "h4" || next.tagName === "h5" || next.tagName === "h6" || next.tagName === "header" || next.tagName === "hgroup" || next.tagName === "hr" || next.tagName === "main" || next.tagName === "menu" || next.tagName === "nav" || next.tagName === "ol" || next.tagName === "p" || next.tagName === "pre" || next.tagName === "section" || next.tagName === "table" || next.tagName === "ul") : !parent || // Confusing parent.
  !(parent.type === "element" && (parent.tagName === "a" || parent.tagName === "audio" || parent.tagName === "del" || parent.tagName === "ins" || parent.tagName === "map" || parent.tagName === "noscript" || parent.tagName === "video"));
}
function li(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return !next || next.type === "element" && next.tagName === "li";
}
function dt(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return Boolean(
    next && next.type === "element" && (next.tagName === "dt" || next.tagName === "dd")
  );
}
function dd(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return !next || next.type === "element" && (next.tagName === "dt" || next.tagName === "dd");
}
function rubyElement(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return !next || next.type === "element" && (next.tagName === "rp" || next.tagName === "rt");
}
function optgroup(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return !next || next.type === "element" && next.tagName === "optgroup";
}
function option(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return !next || next.type === "element" && (next.tagName === "option" || next.tagName === "optgroup");
}
function thead(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return Boolean(
    next && next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot")
  );
}
function tbody(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return !next || next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot");
}
function tfoot(_, index11, parent) {
  return !siblingAfter(parent, index11);
}
function tr(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return !next || next.type === "element" && next.tagName === "tr";
}
function cells(_, index11, parent) {
  const next = siblingAfter(parent, index11);
  return !next || next.type === "element" && (next.tagName === "td" || next.tagName === "th");
}
var closing;
var init_closing = __esm({
  "node_modules/hast-util-to-html/lib/omission/closing.js"() {
    init_hast_util_whitespace();
    init_siblings();
    init_omission();
    closing = omission({
      body: body2,
      caption: headOrColgroupOrCaption,
      colgroup: headOrColgroupOrCaption,
      dd,
      dt,
      head: headOrColgroupOrCaption,
      html: html6,
      li,
      optgroup,
      option,
      p,
      rp: rubyElement,
      rt: rubyElement,
      tbody,
      td: cells,
      tfoot,
      th: cells,
      thead,
      tr
    });
  }
});

// node_modules/hast-util-to-html/lib/omission/opening.js
function html7(node2) {
  const head3 = siblingAfter(node2, -1);
  return !head3 || head3.type !== "comment";
}
function head2(node2) {
  const seen = /* @__PURE__ */ new Set();
  for (const child2 of node2.children) {
    if (child2.type === "element" && (child2.tagName === "base" || child2.tagName === "title")) {
      if (seen.has(child2.tagName)) return false;
      seen.add(child2.tagName);
    }
  }
  const child = node2.children[0];
  return !child || child.type === "element";
}
function body3(node2) {
  const head3 = siblingAfter(node2, -1, true);
  return !head3 || head3.type !== "comment" && !(head3.type === "text" && whitespace(head3.value.charAt(0))) && !(head3.type === "element" && (head3.tagName === "meta" || head3.tagName === "link" || head3.tagName === "script" || head3.tagName === "style" || head3.tagName === "template"));
}
function colgroup(node2, index11, parent) {
  const previous2 = siblingBefore(parent, index11);
  const head3 = siblingAfter(node2, -1, true);
  if (parent && previous2 && previous2.type === "element" && previous2.tagName === "colgroup" && closing(previous2, parent.children.indexOf(previous2), parent)) {
    return false;
  }
  return Boolean(head3 && head3.type === "element" && head3.tagName === "col");
}
function tbody2(node2, index11, parent) {
  const previous2 = siblingBefore(parent, index11);
  const head3 = siblingAfter(node2, -1);
  if (parent && previous2 && previous2.type === "element" && (previous2.tagName === "thead" || previous2.tagName === "tbody") && closing(previous2, parent.children.indexOf(previous2), parent)) {
    return false;
  }
  return Boolean(head3 && head3.type === "element" && head3.tagName === "tr");
}
var opening;
var init_opening = __esm({
  "node_modules/hast-util-to-html/lib/omission/opening.js"() {
    init_hast_util_whitespace();
    init_siblings();
    init_closing();
    init_omission();
    opening = omission({
      body: body3,
      colgroup,
      head: head2,
      html: html7,
      tbody: tbody2
    });
  }
});

// node_modules/hast-util-to-html/lib/handle/element.js
function element2(node2, index11, parent, state2) {
  const schema = state2.schema;
  const omit = schema.space === "svg" ? false : state2.settings.omitOptionalTags;
  let selfClosing = schema.space === "svg" ? state2.settings.closeEmptyElements : state2.settings.voids.includes(node2.tagName.toLowerCase());
  const parts = [];
  let last;
  if (schema.space === "html" && node2.tagName === "svg") {
    state2.schema = svg2;
  }
  const attributes = serializeAttributes(state2, node2.properties);
  const content3 = state2.all(
    schema.space === "html" && node2.tagName === "template" ? node2.content : node2
  );
  state2.schema = schema;
  if (content3) selfClosing = false;
  if (attributes || !omit || !opening(node2, index11, parent)) {
    parts.push("<", node2.tagName, attributes ? " " + attributes : "");
    if (selfClosing && (schema.space === "svg" || state2.settings.closeSelfClosing)) {
      last = attributes.charAt(attributes.length - 1);
      if (!state2.settings.tightSelfClosing || last === "/" || last && last !== '"' && last !== "'") {
        parts.push(" ");
      }
      parts.push("/");
    }
    parts.push(">");
  }
  parts.push(content3);
  if (!selfClosing && (!omit || !closing(node2, index11, parent))) {
    parts.push("</" + node2.tagName + ">");
  }
  return parts.join("");
}
function serializeAttributes(state2, properties2) {
  const values = [];
  let index11 = -1;
  let key3;
  if (properties2) {
    for (key3 in properties2) {
      if (properties2[key3] !== null && properties2[key3] !== void 0) {
        const value = serializeAttribute(state2, key3, properties2[key3]);
        if (value) values.push(value);
      }
    }
  }
  while (++index11 < values.length) {
    const last = state2.settings.tightAttributes ? values[index11].charAt(values[index11].length - 1) : void 0;
    if (index11 !== values.length - 1 && last !== '"' && last !== "'") {
      values[index11] += " ";
    }
  }
  return values.join("");
}
function serializeAttribute(state2, key3, value) {
  const info = find(state2.schema, key3);
  const x = state2.settings.allowParseErrors && state2.schema.space === "html" ? 0 : 1;
  const y = state2.settings.allowDangerousCharacters ? 0 : 1;
  let quote = state2.quote;
  let result;
  if (info.overloadedBoolean && (value === info.attribute || value === "")) {
    value = true;
  } else if ((info.boolean || info.overloadedBoolean) && (typeof value !== "string" || value === info.attribute || value === "")) {
    value = Boolean(value);
  }
  if (value === null || value === void 0 || value === false || typeof value === "number" && Number.isNaN(value)) {
    return "";
  }
  const name = stringifyEntities(
    info.attribute,
    Object.assign({}, state2.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: constants.name[x][y]
    })
  );
  if (value === true) return name;
  value = Array.isArray(value) ? (info.commaSeparated ? stringify3 : stringify4)(value, {
    padLeft: !state2.settings.tightCommaSeparatedLists
  }) : String(value);
  if (state2.settings.collapseEmptyAttributes && !value) return name;
  if (state2.settings.preferUnquoted) {
    result = stringifyEntities(
      value,
      Object.assign({}, state2.settings.characterReferences, {
        attribute: true,
        subset: constants.unquoted[x][y]
      })
    );
  }
  if (result !== value) {
    if (state2.settings.quoteSmart && ccount(value, quote) > ccount(value, state2.alternative)) {
      quote = state2.alternative;
    }
    result = quote + stringifyEntities(
      value,
      Object.assign({}, state2.settings.characterReferences, {
        // Always encode without parse errors in non-HTML.
        subset: (quote === "'" ? constants.single : constants.double)[x][y],
        attribute: true
      })
    ) + quote;
  }
  return name + (result ? "=" + result : result);
}
var constants;
var init_element = __esm({
  "node_modules/hast-util-to-html/lib/handle/element.js"() {
    init_ccount();
    init_comma_separated_tokens();
    init_property_information();
    init_space_separated_tokens();
    init_stringify_entities();
    init_closing();
    init_opening();
    constants = {
      // See: <https://html.spec.whatwg.org/#attribute-name-state>.
      name: [
        ["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")],
        [`\0	
\f\r "&'/<=>`.split(""), "\0	\n\f\r \"&'/<=>`".split("")]
      ],
      // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
      unquoted: [
        ["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")],
        ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]
      ],
      // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
      single: [
        ["&'".split(""), "\"&'`".split("")],
        ["\0&'".split(""), "\0\"&'`".split("")]
      ],
      // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
      double: [
        ['"&'.split(""), "\"&'`".split("")],
        ['\0"&'.split(""), "\0\"&'`".split("")]
      ]
    };
  }
});

// node_modules/hast-util-to-html/lib/handle/text.js
function text7(node2, _, parent, state2) {
  return parent && parent.type === "element" && (parent.tagName === "script" || parent.tagName === "style") ? node2.value : stringifyEntities(
    node2.value,
    Object.assign({}, state2.settings.characterReferences, {
      subset: textEntitySubset
    })
  );
}
var textEntitySubset;
var init_text4 = __esm({
  "node_modules/hast-util-to-html/lib/handle/text.js"() {
    init_stringify_entities();
    textEntitySubset = ["<", "&"];
  }
});

// node_modules/hast-util-to-html/lib/handle/raw.js
function raw(node2, index11, parent, state2) {
  return state2.settings.allowDangerousHtml ? node2.value : text7(node2, index11, parent, state2);
}
var init_raw = __esm({
  "node_modules/hast-util-to-html/lib/handle/raw.js"() {
    init_text4();
  }
});

// node_modules/hast-util-to-html/lib/handle/root.js
function root5(node2, _1, _2, state2) {
  return state2.all(node2);
}
var init_root3 = __esm({
  "node_modules/hast-util-to-html/lib/handle/root.js"() {
  }
});

// node_modules/hast-util-to-html/lib/handle/index.js
function invalid2(node2) {
  throw new Error("Expected node, not `" + node2 + "`");
}
function unknown2(node_) {
  const node2 = (
    /** @type {Nodes} */
    node_
  );
  throw new Error("Cannot compile unknown node `" + node2.type + "`");
}
var handle2;
var init_handle2 = __esm({
  "node_modules/hast-util-to-html/lib/handle/index.js"() {
    init_zwitch();
    init_comment();
    init_doctype();
    init_element();
    init_raw();
    init_root3();
    init_text4();
    handle2 = zwitch("type", {
      invalid: invalid2,
      unknown: unknown2,
      handlers: { comment: comment2, doctype: doctype2, element: element2, raw, root: root5, text: text7 }
    });
  }
});

// node_modules/hast-util-to-html/lib/index.js
function toHtml(tree, options2) {
  const options_ = options2 || emptyOptions3;
  const quote = options_.quote || '"';
  const alternative = quote === '"' ? "'" : '"';
  if (quote !== '"' && quote !== "'") {
    throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
  }
  const state2 = {
    one: one2,
    all: all2,
    settings: {
      omitOptionalTags: options_.omitOptionalTags || false,
      allowParseErrors: options_.allowParseErrors || false,
      allowDangerousCharacters: options_.allowDangerousCharacters || false,
      quoteSmart: options_.quoteSmart || false,
      preferUnquoted: options_.preferUnquoted || false,
      tightAttributes: options_.tightAttributes || false,
      upperDoctype: options_.upperDoctype || false,
      tightDoctype: options_.tightDoctype || false,
      bogusComments: options_.bogusComments || false,
      tightCommaSeparatedLists: options_.tightCommaSeparatedLists || false,
      tightSelfClosing: options_.tightSelfClosing || false,
      collapseEmptyAttributes: options_.collapseEmptyAttributes || false,
      allowDangerousHtml: options_.allowDangerousHtml || false,
      voids: options_.voids || htmlVoidElements,
      characterReferences: options_.characterReferences || emptyCharacterReferences,
      closeSelfClosing: options_.closeSelfClosing || false,
      closeEmptyElements: options_.closeEmptyElements || false
    },
    schema: options_.space === "svg" ? svg2 : html5,
    quote,
    alternative
  };
  return state2.one(
    Array.isArray(tree) ? { type: "root", children: tree } : tree,
    void 0,
    void 0
  );
}
function one2(node2, index11, parent) {
  return handle2(node2, index11, parent, this);
}
function all2(parent) {
  const results = [];
  const children2 = parent && parent.children || emptyChildren2;
  let index11 = -1;
  while (++index11 < children2.length) {
    results[index11] = this.one(children2[index11], index11, parent);
  }
  return results.join("");
}
var emptyOptions3, emptyCharacterReferences, emptyChildren2;
var init_lib20 = __esm({
  "node_modules/hast-util-to-html/lib/index.js"() {
    init_html_void_elements();
    init_property_information();
    init_handle2();
    emptyOptions3 = {};
    emptyCharacterReferences = {};
    emptyChildren2 = [];
  }
});

// node_modules/hast-util-to-html/index.js
var init_hast_util_to_html = __esm({
  "node_modules/hast-util-to-html/index.js"() {
    init_lib20();
  }
});

// .svelte-kit/output/server/chunks/content.js
function remarkHtml(options2) {
  const self2 = this;
  const { handlers: handlers2, sanitize: clean, ...toHtmlOptions } = options2 || emptyOptions4;
  let allowDangerousHtml = false;
  let schema;
  if (typeof clean === "boolean") {
    allowDangerousHtml = !clean;
  } else if (clean) {
    schema = clean;
  }
  self2.compiler = compiler2;
  function compiler2(tree, file) {
    const hast = toHast(tree, { handlers: handlers2, allowDangerousHtml });
    const safeHast = allowDangerousHtml ? hast : sanitize(hast, schema);
    const result = toHtml(safeHast, { ...toHtmlOptions, allowDangerousHtml });
    if (file.extname) {
      file.extname = ".html";
    }
    return tree && tree.type === "root" && result && /[^\r\n]/.test(result.charAt(result.length - 1)) ? result + "\n" : result;
  }
}
function parseFrontmatter(content3) {
  const frontmatterMatch = content3.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) {
    return { data: {}, content: content3 };
  }
  const [, frontmatterStr, bodyContent] = frontmatterMatch;
  const data = {};
  const lines = frontmatterStr.split("\n");
  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key3 = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          value = JSON.parse(value);
        } catch {
        }
      }
      data[key3] = value;
    }
  }
  return { data, content: bodyContent };
}
async function getProjects() {
  return projectsData;
}
async function getContactInfo() {
  return contactData;
}
async function getResumeData() {
  return resumeData;
}
async function getAboutContent() {
  try {
    if (!aboutMd || typeof aboutMd !== "string") {
      throw new Error("About markdown content is not available");
    }
    const { content: content3 } = parseFrontmatter(aboutMd);
    const processedContent = await remark().use(remarkHtml).process(content3);
    return processedContent.toString();
  } catch (error2) {
    console.error("Error processing about content:", error2);
    try {
      const contentAfterFrontmatter = aboutMd.replace(/^---[\s\S]*?---\n?/, "");
      const processedContent = await remark().use(remarkHtml).process(contentAfterFrontmatter || "# About\n\nContent unavailable.");
      return processedContent.toString();
    } catch (fallbackError) {
      console.error("Fallback processing failed:", fallbackError);
      return "<h1>About</h1><p>Content unavailable at the moment.</p>";
    }
  }
}
async function getBlogPosts() {
  const posts = await Promise.all(
    Object.entries(blogPostsContent).map(async ([slug, fileContent]) => {
      const { data, content: content3 } = parseFrontmatter(fileContent);
      const processedContent = await remark().use(remarkHtml).process(content3);
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags || [],
        content: processedContent.toString()
      };
    })
  );
  return posts.sort((a, b) => a.date > b.date ? -1 : 1);
}
async function getBlogPost(slug) {
  const fileContent = blogPostsContent[slug];
  if (!fileContent) {
    return null;
  }
  const { data, content: content3 } = parseFrontmatter(fileContent);
  const processedContent = await remark().use(remarkHtml).process(content3);
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    tags: data.tags || [],
    content: processedContent.toString()
  };
}
var __vite_glob_0_0, __vite_glob_0_1, __vite_glob_0_2, __vite_glob_1_0, remark, emptyOptions4, projectsData, email, formspreeEndpoint, socialLinks, availability, contactData, pdfUrl, lastUpdated, sections, resumeData, blogPostModules, aboutModule, blogPostsContent, aboutMd;
var init_content3 = __esm({
  ".svelte-kit/output/server/chunks/content.js"() {
    init_remark_parse();
    init_remark_stringify();
    init_unified();
    init_hast_util_sanitize();
    init_mdast_util_to_hast();
    init_hast_util_to_html();
    __vite_glob_0_0 = '---\ntitle: "Building Responsive Websites with Tailwind CSS"\ndate: "2024-12-10"\nexcerpt: "Master responsive design with Tailwind CSS utility classes and create websites that look great on all devices."\ntags: ["CSS", "Tailwind", "Responsive Design"]\n---\n\n# Building Responsive Websites with Tailwind CSS\n\nResponsive design is crucial in today\'s multi-device world. Tailwind CSS makes it incredibly easy to build responsive websites with its intuitive utility classes.\n\n## The Mobile-First Approach\n\nTailwind CSS follows a mobile-first approach, meaning styles are applied to mobile devices by default, and larger screens are targeted using responsive prefixes.\n\n```html\n<!-- Base styles for mobile, md: for tablets, lg: for desktop -->\n<div class="text-sm md:text-base lg:text-lg">Responsive text size</div>\n```\n\n## Responsive Breakpoints\n\nTailwind provides five default breakpoints:\n\n- `sm`: 640px and up\n- `md`: 768px and up\n- `lg`: 1024px and up\n- `xl`: 1280px and up\n- `2xl`: 1536px and up\n\n## Common Responsive Patterns\n\n### 1. Grid Layouts\n\n```html\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n  <!-- Grid items -->\n</div>\n```\n\n### 2. Flexible Navigation\n\n```html\n<nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">\n  <!-- Navigation items -->\n</nav>\n```\n\n### 3. Responsive Typography\n\n```html\n<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">Responsive Heading</h1>\n```\n\n## Tips for Better Responsive Design\n\n1. **Test on Real Devices** - Emulators are good, but real devices give you the true experience\n2. **Consider Touch Targets** - Make buttons and links large enough for fingers\n3. **Optimize Images** - Use responsive images and modern formats like WebP\n4. **Think Content-First** - Design your content hierarchy before adding visual elements\n\n## Conclusion\n\nTailwind CSS makes responsive design straightforward and maintainable. By following these patterns and best practices, you\'ll create websites that provide excellent user experiences across all devices.\n';
    __vite_glob_0_1 = '---\ntitle: "Getting Started with Next.js 15: A Developer\'s Guide"\ndate: "2024-12-15"\nexcerpt: "Learn how to build modern web applications with Next.js 15, covering the latest features and best practices."\ntags: ["Next.js", "React", "Web Development"]\n---\n\n# Getting Started with Next.js 15: A Developer\'s Guide\n\nNext.js has become one of the most popular React frameworks for building modern web applications. With the release of Next.js 15, we\'ve got exciting new features that make development even more enjoyable.\n\n## What\'s New in Next.js 15\n\n### 1. Improved App Router\n\nThe App Router has been refined with better performance and developer experience. The new routing system makes it easier to create complex layouts and handle data fetching.\n\n### 2. Enhanced Server Components\n\nServer Components now have better streaming capabilities and improved hydration, making your apps faster and more responsive.\n\n### 3. Turbopack Improvements\n\nWhile still in beta, Turbopack continues to show impressive performance gains over Webpack, especially for larger applications.\n\n## Getting Started\n\nTo create a new Next.js 15 project:\n\n```bash\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n```\n\n## Best Practices\n\n1. **Use TypeScript** - It catches errors early and improves developer experience\n2. **Leverage Server Components** - They reduce client-side JavaScript and improve performance\n3. **Optimize Images** - Use the built-in Image component for automatic optimization\n4. **Implement Proper SEO** - Use metadata API for better search engine visibility\n\n## Conclusion\n\nNext.js 15 continues to push the boundaries of what\'s possible with React applications. Whether you\'re building a simple portfolio or a complex enterprise application, Next.js provides the tools you need to succeed.\n\nHappy coding!\n';
    __vite_glob_0_2 = '---\ntitle: "Intro to Prompt Engineering for Developers"\ndate: "2025-07-20"\nexcerpt: "Prompt engineering has evolved. Here\'s what it is, how it started, and what developers need to know to build smarter, more useful AI-powered apps."\ntags: ["AI", "Prompt Engineering", "LLMs", "DevTools"]\n---\n\n# Intro to Prompt Engineering for Developers\n\nPrompt engineering is the skill of shaping human intent into structured language that large language models (LLMs) can understand and respond to effectively. But it\'s not just about writing clever inputs \u2014 it\'s now part of building full-featured AI applications.\n\nWhether you\'re building a chatbot, a coding assistant, or an internal tool with LLM capabilities, prompt engineering is the entry point between user needs and machine reasoning.\n\n## How Prompt Engineering Started\n\nIn the early ChatGPT days (late 2022 to early 2023), prompting was seen as an art form. People experimented with:\n\n- Phrasing tricks like "Act as a\u2026" or "Let\'s think step by step"\n- Prompt chaining, where outputs fed into new inputs\n- Jailbreaking to bypass content filters\n\nBack then, prompting was the entire interface. It felt magical \u2014 and anyone could do it.\n\nAt the time, a good prompt felt like a cheat code.\n\n## How It\'s Evolved\n\nToday in 2025, prompt engineering is still valuable \u2014 but the game has changed:\n\n| Then (2022\u20132023)        | Now (2024\u20132025)                        |\n| ----------------------- | -------------------------------------- |\n| Prompt = interface      | Prompt = one part of an LLM pipeline   |\n| Mostly manual tinkering | Structured prompts + tools + memory    |\n| Clever wording was key  | Systematic design is key               |\n| Anyone could do it      | Developers need engineering skills too |\n\nModern LLM apps combine:\n\n- Structured system and user prompts\n- Few-shot examples\n- Function calling and tool use\n- Embeddings and vector search\n- Memory/context management\n\nPrompting is no longer about "talking nicely to ChatGPT" \u2014 it\'s about designing systems that think and communicate well.\n\n## Core Prompting Techniques for Developers\n\nHere are four common and powerful prompting strategies used in actual development.\n\n### 1. Instructional Prompts\n\nTell the model directly what to do.\n\n```\nSummarize the following blog post into a 3-sentence executive summary.\n```\n\nUseful for: content generation, summarization, translation, analysis.\n\n### 2. Role-Based Prompts\n\nAssign a role or identity to the model.\n\n```\nYou are a senior software engineer. Explain the difference between REST and GraphQL to a junior developer.\n```\n\nUseful for: tutoring, simulation, support bots, onboarding tools.\n\n### 3. Few-Shot Prompts\n\nProvide input-output examples to guide structure or tone.\n\n```\nQ: What is a closure in JavaScript?\nA: A closure is a function that remembers the variables from its lexical scope even when it\'s run outside that scope.\n\nQ: What is a promise in JavaScript?\nA:\n```\n\nUseful for: Q&A, custom formatting, structured responses.\n\n### 4. Chain-of-Thought Prompts\n\nEncourage step-by-step reasoning before giving the answer.\n\n```\nLet\'s think step by step:\nA farmer has 15 apples. He gives 3 to each of his 4 children. How many apples does he have left?\n```\n\nUseful for: planning, math, logic, decision-making tasks.\n\n## Real-World Use Cases\n\nPrompt engineering is now embedded into production systems. Some examples:\n\n### Code Review Assistant\n\n```\nYou are a code reviewer. Analyze the following code for logic bugs, readability issues, and suggest improvements. Output in markdown.\n\nCode:\n${userCode}\n```\n\n### AI Function Routing\n\nUsed in OpenAI\'s function calling or custom GPTs.\n\n```\nYou are an assistant that helps plan events. When the user mentions a date or location, use the create_event() function.\n```\n\n### Custom System Personas\n\nUsed in assistant-like tools, da\'wah apps, or productivity bots.\n\n```\nYou are a calm, helpful Islamic teacher. Speak to beginners, avoid complex terms, and offer references when possible.\n```\n\n## Tips to Prompt Like a Developer\n\n1. Treat prompts like code: test, modularize, version-control them\n2. Be specific: models don\'t read minds \u2014 state what you want clearly\n3. Control formatting: ask for markdown, bullet lists, or JSON\n4. Don\'t rely on memory: repeat relevant info if needed\n5. Think contextually: combine prompt design with tool logic and memory\n\n## Common Mistakes to Avoid\n\n- Vague prompts like "help me with this" \u2014 help how, and with what?\n- Assuming the model understands your app state or logic \u2014 it doesn\'t\n- Expecting perfect repeatability \u2014 LLMs are probabilistic by design\n- Writing prompts like prose instead of clear instructions\n\n## The Role of Prompting in 2025\n\nPrompt engineering isn\'t dead \u2014 it\'s just no longer the whole picture. It\'s now one layer of the LLM application stack.\n\nTo stay ahead, developers need to combine:\n\n- Clear, effective prompting\n- Smart system design\n- APIs, tools, and context management\n- Testing and iteration\n\nIf you can do that, you\'re not just a prompt engineer \u2014 you\'re building the future of human-computer interaction.\n\n## Coming Next\n\nIn the next post, we\'ll walk through building an actual LLM-powered web app using Vite, React, and the OpenAI API \u2014 with real prompt logic and live testing.\n\nStay tuned.\n';
    __vite_glob_1_0 = `---
title: "About me"
---

I'm a prompt engineer and future full-stack developer who thrives on building meaningful, real-world solutions with modern web tools. From elegant UIs to powerful backends, I enjoy turning ideas into beautiful, functional applications.

While currently pursuing a bachelor's in Cybersecurity (July 2025), I continue to sharpen my skills across the stack \u2014 from React and Svelte on the frontend to Node.js on the backend \u2014 blending security awareness with development finesse.

## Skills

- Prompt Engineering (Custom GPT Prompts, Instruction Design, Prompt Debugging)
- Problem Solving & Debugging
- Full-Stack Development (in progress)

## Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

## Tools and Platforms

- Cloudflare Pages (deployment)
- VS Code
- Terminal / CLI
- GitHub

## Experience

- Prompt Engineer
- Social Media Manager
- Developing tools to help business productivity

## Soft Skills

- Self-Learning & Curiosity
- Adaptability
- Clear Written Communication
- Creative Problem Solving

## Interests

- Clean code architecture
- Performance optimization
- Developer experience
- Teaching and mentoring
- Cybersecurity
- Artificial Intelligence
`;
    remark = unified().use(remarkParse).use(remarkStringify).freeze();
    emptyOptions4 = {};
    projectsData = [
      {
        id: "score-buddies",
        title: "Score Buddies",
        description: "A full-stack task management application built with SvelteKit, featuring real-time collaboration, authentication, and beautiful UI.",
        techStack: [
          "SvelteKit",
          "TypeScript",
          "SQLite",
          "Drizzle ORM",
          "Lucia Auth"
        ],
        liveUrl: "https://score-buddies.pages.dev/",
        githubUrl: "https://github.com/Majed-Develops/Score-Buddies",
        imageUrl: "/images/Score_buddies.png",
        videoUrl: "/videos/task-manager-demo.mp4",
        featured: true
      },
      {
        id: "score-buddies-simple",
        title: "Score Buddies (Simple)",
        description: "A multi-theme score tracking application built with Svelte 5, featuring five unique interfaces, real-time scoring, and responsive design.",
        techStack: [
          "Svelte 5",
          "Vite",
          "JavaScript",
          "CSS"
        ],
        liveUrl: "https://score-buddies-versions.pages.dev/",
        githubUrl: "https://github.com/Majed-Develops/Score-buddies-versions",
        imageUrl: "/images/Score_buddies_versions.png",
        videoUrl: "/videos/task-manager-demo.mp4",
        featured: true
      },
      {
        id: "balagh",
        title: "Balagh",
        description: "A modern React application helping Muslims share their faith with beautiful resources and tools.",
        techStack: [
          "React 19",
          "Vite",
          "Tailwind CSS",
          "Radix UI"
        ],
        liveUrl: "https://balagh.pages.dev/",
        githubUrl: "https://github.com/Majed-Develops/balagh",
        imageUrl: "/images/balagh.png",
        featured: true
      },
      {
        id: "study-buddy",
        title: "Study Buddy",
        description: "Study Buddy is a responsive React 19 + Vite app combining a Pomodoro timer and exam system using modern JS, custom CSS, hooks, and Web Audio API.",
        techStack: [
          "React 19",
          "Vite",
          "Javescript ES",
          "CSS"
        ],
        liveUrl: "https://study-buddy-aln.pages.dev/",
        githubUrl: "https://github.com/Majed-Develops/study-buddy",
        imageUrl: "/images/study-buddy.png",
        featured: true
      },
      {
        id: "portfolio-website",
        title: "majedabusitta - svelte",
        description: "My portfolio in Svelte instead of React/Next.js - featuring smooth animations, multiple themes, and modern design",
        techStack: [
          "SvelteKit",
          "TypeScript",
          "Tailwind CSS",
          "Vite"
        ],
        liveUrl: "https://f2369a32.majedabusitta-svelte.pages.dev/",
        githubUrl: "https://github.com/majed-develops/majedabusitta-svelte",
        imageUrl: "/images/majedabusitta-svelte.png",
        featured: true
      }
    ];
    email = "majedbashir.dev@gmail.com";
    formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
    socialLinks = {
      github: "https://github.com/majed-develops",
      linkedin: "https://www.linkedin.com/in/majed-bashir",
      hackerone: "https://hackerone.com/mr_devz"
    };
    availability = "Currently available for freelance projects and full-time opportunities";
    contactData = {
      email,
      formspreeEndpoint,
      socialLinks,
      availability
    };
    pdfUrl = "/resume/Majed-Abu-Sitta-Resume.pdf";
    lastUpdated = "2025-7-20";
    sections = {
      summary: "Although early in my development career, I've actively worked on real-world projects that sharpen my skills in building modern, responsive web applications. I've developed interactive tools, educational games, and productivity apps as part of my personal learning journey and client work \u2014 all with a strong focus on clean code, usability, and performance.",
      experience: [
        {
          company: "ClicTec Solutions",
          position: "Social Media Manager",
          duration: "March 2024 - October 2024",
          description: [
            "Created educational and industry-relevant content to promote cybersecurity awareness, simplify complex technical topics, and highlight the company\u2019s services.",
            "Monitored trends in cybersecurity and tech to keep the brand voice relevant and authoritative"
          ]
        }
      ],
      skills: [
        "JavaScript",
        "Prompt Engineering",
        "Full-stack developer (in progress)",
        "Problem Solving & Debugging",
        "GitHub"
      ],
      education: [
        {
          institution: "University Kuala Lumpur",
          degree: "Bachelor of Computer System Security",
          year: "Present"
        }
      ]
    };
    resumeData = {
      pdfUrl,
      lastUpdated,
      sections
    };
    blogPostModules = /* @__PURE__ */ Object.assign({ "../../content/posts/building-responsive-websites.md": __vite_glob_0_0, "../../content/posts/getting-started-with-nextjs.md": __vite_glob_0_1, "../../content/posts/intro-to-prompt-engineering-for-developers.md": __vite_glob_0_2 });
    aboutModule = /* @__PURE__ */ Object.assign({ "../../content/about.md": __vite_glob_1_0 });
    blogPostsContent = {};
    for (const [path, content3] of Object.entries(blogPostModules)) {
      const filename = path.split("/").pop()?.replace(".md", "") || "";
      blogPostsContent[filename] = content3;
    }
    aboutMd = Object.values(aboutModule)[0] || "";
  }
});

// .svelte-kit/output/server/entries/pages/about/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
var load;
var init_page_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/about/_page.server.ts.js"() {
    init_content3();
    load = async () => {
      const aboutContent = await getAboutContent();
      return {
        aboutContent
      };
    };
  }
});

// .svelte-kit/output/server/entries/pages/about/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => _page2
});
function _page2($$payload, $$props) {
  push();
  let { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About - Majed Abu Sitta</title>`;
  });
  $$payload.out.push(`<div class="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8"><div class="mx-auto max-w-2xl lg:mx-0"><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">About Me</h1> <div class="mt-6 about-content">${html(data.aboutContent)}</div></div> <div class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3"><div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white shadow-2xl hover:scale-105 transition-transform"><div class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10"></div> <div class="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-white/5"></div> <div class="relative z-10"><div class="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></div> <h3 class="text-xl font-bold mb-3">Active Projects</h3> <p class="text-blue-100 text-sm leading-relaxed">Working on several personal and learning projects to sharpen my skills</p></div></div> <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white shadow-2xl hover:scale-105 transition-transform"><div class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10"></div> <div class="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-white/5"></div> <div class="relative z-10"><div class="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div> <h3 class="text-xl font-bold mb-3">Collaborations</h3> <p class="text-emerald-100 text-sm leading-relaxed">Collaborated with peers and contributed to small projects as I grow</p></div></div> <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white shadow-2xl hover:scale-105 transition-transform"><div class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10"></div> <div class="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-white/5"></div> <div class="relative z-10"><div class="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div> <h3 class="text-xl font-bold mb-3">Growth Mindset</h3> <div class="flex items-center space-x-2"><span class="text-3xl font-bold">100%</span> <span class="text-orange-100 text-sm">Eager to Improve</span></div></div></div></div></div>`);
  pop();
}
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/about/_page.svelte.js"() {
    init_chunks();
    init_html();
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index5,
  server: () => page_server_ts_exports,
  server_id: () => server_id,
  stylesheets: () => stylesheets4
});
var index5, component_cache4, component4, server_id, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page_server_ts();
    index5 = 3;
    component4 = async () => component_cache4 ??= (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    server_id = "src/routes/about/+page.server.ts";
    imports4 = ["_app/immutable/nodes/3.tNsc3bFU.js", "_app/immutable/chunks/NZTpNUN0.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/CnCqLEN_.js"];
    stylesheets4 = [];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/blog/_page.server.ts.js
var page_server_ts_exports2 = {};
__export(page_server_ts_exports2, {
  load: () => load2
});
var load2;
var init_page_server_ts2 = __esm({
  ".svelte-kit/output/server/entries/pages/blog/_page.server.ts.js"() {
    init_content3();
    load2 = async () => {
      const posts = await getBlogPosts();
      return {
        posts
      };
    };
  }
});

// .svelte-kit/output/server/entries/pages/blog/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => _page3
});
function _page3($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.posts);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Blog - Majed Abu Sitta</title>`;
  });
  $$payload.out.push(`<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"><div class="mx-auto max-w-2xl text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Blog</h1> <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Thoughts, tutorials, and insights on web development and technology.</p></div> <div class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let post = each_array[$$index_1];
    const each_array_1 = ensure_array_like(post.tags);
    $$payload.out.push(`<article class="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"><div class="flex items-center gap-x-4 text-xs"><time${attr("datetime", post.date)} class="text-gray-500 dark:text-gray-400">${escape_html(new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))}</time> <div class="flex gap-2"><!--[-->`);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tag = each_array_1[$$index];
      $$payload.out.push(`<span class="relative z-10 rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30">${escape_html(tag)}</span>`);
    }
    $$payload.out.push(`<!--]--></div></div> <div class="group relative max-w-xl"><h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"><a${attr("href", `/blog/${stringify(post.slug)}`)}><span class="absolute inset-0"></span> ${escape_html(post.title)}</a></h3> <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300 line-clamp-3">${escape_html(post.excerpt)}</p></div></article>`);
  }
  $$payload.out.push(`<!--]--></div></div>`);
  pop();
}
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/blog/_page.svelte.js"() {
    init_chunks();
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index6,
  server: () => page_server_ts_exports2,
  server_id: () => server_id2,
  stylesheets: () => stylesheets5
});
var index6, component_cache5, component5, server_id2, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_page_server_ts2();
    index6 = 4;
    component5 = async () => component_cache5 ??= (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    server_id2 = "src/routes/blog/+page.server.ts";
    imports5 = ["_app/immutable/nodes/4.Cl7XQe2c.js", "_app/immutable/chunks/NZTpNUN0.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/TMDQaXup.js", "_app/immutable/chunks/CdlsUkWG.js", "_app/immutable/chunks/BoYayNJO.js"];
    stylesheets5 = [];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/blog/_slug_/_page.server.ts.js
var page_server_ts_exports3 = {};
__export(page_server_ts_exports3, {
  load: () => load3
});
var load3;
var init_page_server_ts3 = __esm({
  ".svelte-kit/output/server/entries/pages/blog/_slug_/_page.server.ts.js"() {
    init_content3();
    init_exports();
    load3 = async ({ params }) => {
      const post = await getBlogPost(params.slug);
      if (!post) {
        throw error(404, "Post not found");
      }
      return {
        post
      };
    };
  }
});

// .svelte-kit/output/server/entries/pages/blog/_slug_/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => _page4
});
function _page4($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.post.tags);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(data.post.title)} - Majed Abu Sitta</title>`;
    $$payload2.out.push(`<meta name="description"${attr("content", data.post.excerpt)}/>`);
  });
  $$payload.out.push(`<article class="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8"><div class="mx-auto max-w-3xl"><div class="mb-8"><div class="flex items-center gap-x-4 text-xs text-gray-500 dark:text-gray-400 mb-4"><time${attr("datetime", data.post.date)}>${escape_html(new Date(data.post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))}</time> <div class="flex gap-2"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out.push(`<span class="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">${escape_html(tag)}</span>`);
  }
  $$payload.out.push(`<!--]--></div></div> <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">${escape_html(data.post.title)}</h1> <p class="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">${escape_html(data.post.excerpt)}</p></div> <div class="prose prose-lg max-w-none dark:prose-invert">${html(data.post.content)}</div> <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"><a href="/blog" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium">\u2190 Back to blog</a></div></div></article>`);
  pop();
}
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/blog/_slug_/_page.svelte.js"() {
    init_chunks();
    init_html();
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index7,
  server: () => page_server_ts_exports3,
  server_id: () => server_id3,
  stylesheets: () => stylesheets6
});
var index7, component_cache6, component6, server_id3, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_page_server_ts3();
    index7 = 5;
    component6 = async () => component_cache6 ??= (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    server_id3 = "src/routes/blog/[slug]/+page.server.ts";
    imports6 = ["_app/immutable/nodes/5.DoHs35H-.js", "_app/immutable/chunks/NZTpNUN0.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/TMDQaXup.js", "_app/immutable/chunks/CdlsUkWG.js", "_app/immutable/chunks/CnCqLEN_.js", "_app/immutable/chunks/BoYayNJO.js"];
    stylesheets6 = [];
    fonts6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/contact/_page.server.ts.js
var page_server_ts_exports4 = {};
__export(page_server_ts_exports4, {
  load: () => load4
});
var load4;
var init_page_server_ts4 = __esm({
  ".svelte-kit/output/server/entries/pages/contact/_page.server.ts.js"() {
    init_content3();
    load4 = async () => {
      const contactInfo = await getContactInfo();
      return {
        contactInfo
      };
    };
  }
});

// .svelte-kit/output/server/entries/pages/contact/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => _page5
});
function _page5($$payload, $$props) {
  push();
  let { data } = $$props;
  let isSubmitting = false;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Contact - Majed Abu Sitta</title>`;
  });
  $$payload.out.push(`<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"><div class="mx-auto max-w-2xl text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Get in Touch</h1> <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">I'd love to hear from you! Whether you have a project in mind or just want to connect.</p></div> <div class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2"><div class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h2> <form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label> <input type="text" name="name" id="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white px-3 py-2 text-base"/></div> <div><label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label> <input type="email" name="email" id="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white px-3 py-2 text-base"/></div> <div><label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label> <input type="text" name="subject" id="subject" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white px-3 py-2 text-base"/></div> <div><label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label> <textarea name="message" id="message" rows="6" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white px-3 py-2 text-base"></textarea></div> <button type="submit"${attr("disabled", isSubmitting, true)} class="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">${escape_html("Send Message")}</button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></form></div> <div class="space-y-8"><div class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2> <div class="space-y-6"><div class="flex items-center space-x-4"><div class="flex-shrink-0">`);
  Icons($$payload, {
    name: "email",
    size: 24,
    class: "h-6 w-6 text-blue-600 dark:text-blue-400"
  });
  $$payload.out.push(`<!----></div> <div><p class="text-sm font-medium text-gray-900 dark:text-white">Email</p> <a${attr("href", `mailto:${stringify(data.contactInfo.email)}`)} class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">${escape_html(data.contactInfo.email)}</a></div></div> <div><p class="text-sm font-medium text-gray-900 dark:text-white mb-3">Connect with me</p> <div class="flex space-x-4"><a${attr("href", data.contactInfo.socialLinks.github)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors" aria-label="GitHub">`);
  Icons($$payload, { name: "github", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a> <a${attr("href", data.contactInfo.socialLinks.linkedin)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">`);
  Icons($$payload, { name: "linkedin", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a> <a${attr("href", data.contactInfo.socialLinks.hackerone)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors" aria-label="HackerOne">`);
  Icons($$payload, { name: "hackerone", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a></div></div> <div><p class="text-sm font-medium text-gray-900 dark:text-white">Availability</p> <p class="text-gray-600 dark:text-gray-300">${escape_html(data.contactInfo.availability)}</p></div></div></div></div></div></div>`);
  pop();
}
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/contact/_page.svelte.js"() {
    init_chunks();
    init_Icons();
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  fonts: () => fonts7,
  imports: () => imports7,
  index: () => index8,
  server: () => page_server_ts_exports4,
  server_id: () => server_id4,
  stylesheets: () => stylesheets7
});
var index8, component_cache7, component7, server_id4, imports7, stylesheets7, fonts7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_page_server_ts4();
    index8 = 6;
    component7 = async () => component_cache7 ??= (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default;
    server_id4 = "src/routes/contact/+page.server.ts";
    imports7 = ["_app/immutable/nodes/6.DbBBpW_y.js", "_app/immutable/chunks/NZTpNUN0.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/TMDQaXup.js", "_app/immutable/chunks/hGDXmQVd.js", "_app/immutable/chunks/BoYayNJO.js", "_app/immutable/chunks/6FRl9e4y.js", "_app/immutable/chunks/CnCqLEN_.js", "_app/immutable/chunks/B3WSMgp5.js", "_app/immutable/chunks/CUAHUuVc.js"];
    stylesheets7 = [];
    fonts7 = [];
  }
});

// .svelte-kit/output/server/entries/pages/projects/_page.server.ts.js
var page_server_ts_exports5 = {};
__export(page_server_ts_exports5, {
  load: () => load5
});
var load5;
var init_page_server_ts5 = __esm({
  ".svelte-kit/output/server/entries/pages/projects/_page.server.ts.js"() {
    init_content3();
    load5 = async () => {
      const projects = await getProjects();
      return {
        projects
      };
    };
  }
});

// .svelte-kit/output/server/entries/pages/projects/_page.svelte.js
var page_svelte_exports6 = {};
__export(page_svelte_exports6, {
  default: () => _page6
});
function _page6($$payload, $$props) {
  push();
  let { data } = $$props;
  let featuredProjects = data.projects.filter((project) => project.featured);
  let otherProjects = data.projects.filter((project) => !project.featured);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Projects - Majed Abu Sitta</title>`;
  });
  $$payload.out.push(`<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"><div class="mx-auto max-w-2xl text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">My Projects</h1> <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">A collection of projects I've built while learning and exploring new technologies.</p></div> `);
  if (featuredProjects.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(featuredProjects);
    $$payload.out.push(`<div class="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24"><h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">Featured Projects</h2> <div class="grid grid-cols-1 gap-8 lg:grid-cols-2"><!--[-->`);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let project = each_array[$$index_1];
      const each_array_1 = ensure_array_like(project.techStack);
      $$payload.out.push(`<div class="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">`);
      if (project.imageUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="aspect-video overflow-hidden rounded-lg mb-4"><img${attr("src", project.imageUrl)}${attr("alt", project.title)} class="h-full w-full object-cover object-center transition-transform group-hover:scale-105"/></div>`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (project.videoUrl) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<div class="aspect-video overflow-hidden rounded-lg mb-4"><video${attr("src", project.videoUrl)}${attr("title", project.title)} class="h-full w-full object-cover object-center" autoplay muted loop></video></div>`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]--> <div class="flex-1"><h3 class="text-xl font-semibold text-gray-900 dark:text-white">${escape_html(project.title)}</h3> <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">${escape_html(project.description)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tech = each_array_1[$$index];
        $$payload.out.push(`<span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20">${escape_html(tech)}</span>`);
      }
      $$payload.out.push(`<!--]--></div> <div class="mt-6 flex items-center gap-4">`);
      if (project.liveUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<a${attr("href", project.liveUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">`);
        Icons($$payload, { name: "external", size: 16 });
        $$payload.out.push(`<!----> Live Demo</a>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--> `);
      if (project.githubUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<a${attr("href", project.githubUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors">`);
        Icons($$payload, { name: "github", size: 16 });
        $$payload.out.push(`<!----> Source Code</a>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div></div></div>`);
    }
    $$payload.out.push(`<!--]--></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (otherProjects.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array_2 = ensure_array_like(otherProjects);
    $$payload.out.push(`<div class="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24"><h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">Other Projects</h2> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let project = each_array_2[$$index_3];
      const each_array_3 = ensure_array_like(project.techStack.slice(0, 3));
      $$payload.out.push(`<div class="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">`);
      if (project.imageUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="aspect-video overflow-hidden rounded-lg mb-4"><img${attr("src", project.imageUrl)}${attr("alt", project.title)} class="h-full w-full object-cover object-center transition-transform group-hover:scale-105"/></div>`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (project.videoUrl) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<div class="aspect-video overflow-hidden rounded-lg mb-4"><video${attr("src", project.videoUrl)}${attr("title", project.title)} class="h-full w-full object-cover object-center" autoplay muted loop></video></div>`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]--> <div class="flex-1"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">${escape_html(project.title)}</h3> <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">${escape_html(project.description)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let tech = each_array_3[$$index_2];
        $$payload.out.push(`<span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20">${escape_html(tech)}</span>`);
      }
      $$payload.out.push(`<!--]--> `);
      if (project.techStack.length > 3) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<span class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-400/20">+${escape_html(project.techStack.length - 3)} more</span>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div> <div class="mt-6 flex items-center gap-2">`);
      if (project.liveUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<a${attr("href", project.liveUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors" aria-label="View live demo">`);
        Icons($$payload, { name: "external", size: 16 });
        $$payload.out.push(`<!----></a>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--> `);
      if (project.githubUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<a${attr("href", project.githubUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors" aria-label="View source code">`);
        Icons($$payload, { name: "github", size: 16 });
        $$payload.out.push(`<!----></a>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div></div></div>`);
    }
    $$payload.out.push(`<!--]--></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div>`);
  pop();
}
var init_page_svelte6 = __esm({
  ".svelte-kit/output/server/entries/pages/projects/_page.svelte.js"() {
    init_chunks();
    init_Icons();
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  component: () => component8,
  fonts: () => fonts8,
  imports: () => imports8,
  index: () => index9,
  server: () => page_server_ts_exports5,
  server_id: () => server_id5,
  stylesheets: () => stylesheets8
});
var index9, component_cache8, component8, server_id5, imports8, stylesheets8, fonts8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    init_page_server_ts5();
    index9 = 7;
    component8 = async () => component_cache8 ??= (await Promise.resolve().then(() => (init_page_svelte6(), page_svelte_exports6))).default;
    server_id5 = "src/routes/projects/+page.server.ts";
    imports8 = ["_app/immutable/nodes/7.DaAv8ANT.js", "_app/immutable/chunks/NZTpNUN0.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/TMDQaXup.js", "_app/immutable/chunks/hGDXmQVd.js", "_app/immutable/chunks/CdlsUkWG.js", "_app/immutable/chunks/BoYayNJO.js", "_app/immutable/chunks/6FRl9e4y.js", "_app/immutable/chunks/CnCqLEN_.js", "_app/immutable/chunks/B3WSMgp5.js", "_app/immutable/chunks/CUAHUuVc.js"];
    stylesheets8 = [];
    fonts8 = [];
  }
});

// .svelte-kit/output/server/entries/pages/resume/_page.server.ts.js
var page_server_ts_exports6 = {};
__export(page_server_ts_exports6, {
  load: () => load6
});
var load6;
var init_page_server_ts6 = __esm({
  ".svelte-kit/output/server/entries/pages/resume/_page.server.ts.js"() {
    init_content3();
    load6 = async () => {
      const resumeData2 = await getResumeData();
      return {
        resumeData: resumeData2
      };
    };
  }
});

// .svelte-kit/output/server/entries/pages/resume/_page.svelte.js
var page_svelte_exports7 = {};
__export(page_svelte_exports7, {
  default: () => _page7
});
function _page7($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.resumeData.sections.experience);
  const each_array_1 = ensure_array_like(data.resumeData.sections.skills);
  const each_array_2 = ensure_array_like(data.resumeData.sections.education);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Resume - Majed Abu Sitta</title>`;
  });
  $$payload.out.push(`<div class="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8"><div class="text-center mb-16"><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Resume</h1> <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">My professional background and experience in web development.</p> <div class="mt-8 flex justify-center gap-4"><a${attr("href", data.resumeData.pdfUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">`);
  Icons($$payload, { name: "download", size: 16 });
  $$payload.out.push(`<!----> Download PDF</a></div> <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Last updated: ${escape_html(new Date(data.resumeData.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))}</p></div> <div class="space-y-12"><section><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h2> <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"><p class="text-gray-600 dark:text-gray-300 leading-relaxed">${escape_html(data.resumeData.sections.summary)}</p></div></section> <section><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2> <div class="space-y-6"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let job = each_array[$$index];
    $$payload.out.push(`<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2"><div><h3 class="text-lg font-semibold text-gray-900 dark:text-white">${escape_html(job.position)}</h3> <p class="text-blue-600 dark:text-blue-400 font-medium">${escape_html(job.company)}</p></div> <span class="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">${escape_html(job.duration)}</span></div> <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${escape_html(job.description)}</p></div>`);
  }
  $$payload.out.push(`<!--]--></div></section> <section><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2> <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="flex flex-wrap gap-3"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let skill = each_array_1[$$index_1];
    $$payload.out.push(`<span class="inline-flex items-center rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20">${escape_html(skill)}</span>`);
  }
  $$payload.out.push(`<!--]--></div></div></section> <section><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2> <div class="space-y-4"><!--[-->`);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let edu = each_array_2[$$index_2];
    $$payload.out.push(`<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="flex flex-col sm:flex-row sm:justify-between sm:items-start"><div><h3 class="text-lg font-semibold text-gray-900 dark:text-white">${escape_html(edu.degree)}</h3> <p class="text-blue-600 dark:text-blue-400 font-medium">${escape_html(edu.institution)}</p></div> <span class="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">${escape_html(edu.year)}</span></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></section></div></div>`);
  pop();
}
var init_page_svelte7 = __esm({
  ".svelte-kit/output/server/entries/pages/resume/_page.svelte.js"() {
    init_chunks();
    init_Icons();
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  component: () => component9,
  fonts: () => fonts9,
  imports: () => imports9,
  index: () => index10,
  server: () => page_server_ts_exports6,
  server_id: () => server_id6,
  stylesheets: () => stylesheets9
});
var index10, component_cache9, component9, server_id6, imports9, stylesheets9, fonts9;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    init_page_server_ts6();
    index10 = 8;
    component9 = async () => component_cache9 ??= (await Promise.resolve().then(() => (init_page_svelte7(), page_svelte_exports7))).default;
    server_id6 = "src/routes/resume/+page.server.ts";
    imports9 = ["_app/immutable/nodes/8.B8PLReT8.js", "_app/immutable/chunks/NZTpNUN0.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/TMDQaXup.js", "_app/immutable/chunks/CdlsUkWG.js", "_app/immutable/chunks/BoYayNJO.js", "_app/immutable/chunks/6FRl9e4y.js", "_app/immutable/chunks/CnCqLEN_.js", "_app/immutable/chunks/B3WSMgp5.js", "_app/immutable/chunks/CUAHUuVc.js"];
    stylesheets9 = [];
    fonts9 = [];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();
init_exports();
init_internal();

// .svelte-kit/output/server/chunks/internal.js
init_chunks();
init_clsx();
var base = "";
var assets = base;
var app_dir = "_app";
var initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
var safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function hydration_mismatch(location) {
  {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node2) {
  if (node2 === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node2;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function handle_event_propagation(event) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event.type;
  var path = event.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  var path_idx = 0;
  var handled_at = event.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  if (current_target === handler_element) return;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event.target === current_target)) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event, ...data]);
          } else {
            delegated.call(current_target, event);
          }
        }
      } catch (error2) {
        if (throw_error) {
          other_errors.push(error2);
        } else {
          throw_error = error2;
        }
      }
      if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error2 of other_errors) {
        queueMicrotask(() => {
          throw error2;
        });
      }
      throw throw_error;
    }
  } finally {
    event.__root = handler_element;
    delete event.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function assign_nodes(start, end) {
  var effect = (
    /** @type {Effect} */
    active_effect
  );
  if (effect.nodes_start === null) {
    effect.nodes_start = start;
    effect.nodes_end = end;
  }
}
function mount(component10, options2) {
  return _mount(component10, options2);
}
function hydrate(component10, options2) {
  init_operations();
  options2.intro = options2.intro ?? false;
  const target = options2.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component10, { ...options2, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error2) {
    if (error2 === HYDRATION_ERROR) {
      if (options2.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component10, options2);
    }
    throw error2;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context: context2, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n2 = document_listeners.get(event_name);
      if (n2 === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n2 + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component10 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context2) {
        push$1({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context2;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      component10 = Component(anchor_node, props) || {};
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context2) {
        pop$1();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n2 = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n2 === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n2);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component10, unmount2);
  return component10;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component10, options2) {
  const fn = mounted_components.get(component10);
  if (fn) {
    mounted_components.delete(component10);
    return fn(options2);
  }
  return Promise.resolve();
}
function asClassComponent$1(component10) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component: component10,
        ...options2
      });
    }
  };
}
var Svelte4Component = class {
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options2) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key3, value) => {
      var s3 = mutable_source(value, false, false);
      sources.set(key3, s3);
      return s3;
    };
    const props = new Proxy(
      { ...options2.props || {}, $$events: {} },
      {
        get(target, prop) {
          return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
        },
        has(target, prop) {
          if (prop === LEGACY_PROPS) return true;
          get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
          return Reflect.has(target, prop);
        },
        set(target, prop, value) {
          set(sources.get(prop) ?? add_source(prop, value), value);
          return Reflect.set(target, prop, value);
        }
      }
    );
    this.#instance = (options2.hydrate ? hydrate : mount)(options2.component, {
      target: options2.target,
      anchor: options2.anchor,
      props,
      context: options2.context,
      intro: options2.intro ?? false,
      recover: options2.recover
    });
    if (!options2?.props?.$$host || options2.sync === false) {
      flushSync();
    }
    this.#events = props.$$events;
    for (const key3 of Object.keys(this.#instance)) {
      if (key3 === "$set" || key3 === "$destroy" || key3 === "$on") continue;
      define_property(this, key3, {
        get() {
          return this.#instance[key3];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key3] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next) => {
      Object.assign(props, next);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    this.#events[event] = this.#events[event] || [];
    const cb = (...args) => callback.call(this, ...args);
    this.#events[event].push(cb);
    return () => {
      this.#events[event] = this.#events[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
};
var read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function asClassComponent(component10) {
  const component_constructor = asClassComponent$1(component10);
  const _render = (props, { context: context2 } = {}) => {
    const result = render(component10, { props, context: context2 });
    return {
      css: { code: "", map: null },
      head: result.head,
      html: result.body
    };
  };
  component_constructor.render = _render;
  return component_constructor;
}
var prerendering = false;
function Root($$payload, $$props) {
  push();
  let {
    stores: stores2,
    page: page3,
    constructors,
    components = [],
    form,
    data_0 = null,
    data_1 = null
  } = $$props;
  {
    setContext("__svelte__", stores2);
  }
  {
    stores2.page.set(page3);
  }
  const Pyramid_1 = constructors[1];
  if (constructors[1]) {
    $$payload.out.push("<!--[-->");
    const Pyramid_0 = constructors[0];
    $$payload.out.push(`<!---->`);
    Pyramid_0($$payload, {
      data: data_0,
      form,
      params: page3.params,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        Pyramid_1($$payload2, { data: data_1, form, params: page3.params });
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    const Pyramid_0 = constructors[0];
    $$payload.out.push(`<!---->`);
    Pyramid_0($$payload, { data: data_0, form, params: page3.params });
    $$payload.out.push(`<!---->`);
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
var root = asClassComponent(Root);
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  templates: {
    app: ({ head: head3, body: body4, assets: assets2, nonce, env: env2 }) => '<!doctype html>\n<html lang="en" %sveltekit.theme%>\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="' + assets2 + '/favicon.png" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    ' + head3 + '\n  </head>\n  <body data-sveltekit-preload-data="hover" class="font-sans antialiased">\n    <div style="display: contents" %sveltekit.theme%>' + body4 + "</div>\n  </body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1gtmy7r"
};
async function get_hooks() {
  let handle3;
  let handleFetch;
  let handleError;
  let init2;
  let reroute;
  let transport;
  return {
    handle: handle3,
    handleFetch,
    handleError,
    init: init2,
    reroute,
    transport
  };
}

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys2) {
    super(message);
    this.name = "DevalueError";
    this.path = keys2.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
var is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function stringify_key(key3) {
  return is_identifier.test(key3) ? "." + key3 : "[" + JSON.stringify(key3) + "]";
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys2 = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys2);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys2.push(`[${i}]`);
            walk(value2);
            keys2.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key3, value2] of thing) {
            keys2.push(
              `.get(${is_primitive(key3) ? stringify_primitive(key3) : "..."})`
            );
            walk(value2);
            keys2.pop();
          }
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          return;
        case "ArrayBuffer":
          return;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys2
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys2
            );
          }
          for (const key3 in thing) {
            keys2.push(stringify_key(key3));
            walk(thing[key3]);
            keys2.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify5(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify5(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify5(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify5).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        const typedArray = thing;
        return `new ${type}([${typedArray.toString()}])`;
      }
      case "ArrayBuffer": {
        const ui8 = new Uint8Array(thing);
        return `new Uint8Array([${ui8.toString()}]).buffer`;
      }
      default:
        const obj = `{${Object.keys(thing).map((key3) => `${safe_key(key3)}:${stringify5(thing[key3])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify5(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify5(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify5(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify5(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify5(k)}, ${stringify5(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key3) => {
            statements.push(
              `${name}${safe_prop(key3)}=${stringify5(thing[key3])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c2) {
  return escaped[c2] || c2;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key3) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key3) ? key3 : escape_unsafe_chars(JSON.stringify(key3));
}
function safe_prop(key3) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key3) ? `.${key3}` : `[${escape_unsafe_chars(JSON.stringify(key3))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (typeof thing === "number") return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint") return thing + "n";
  return str;
}

// node_modules/devalue/src/base64.js
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";
  for (let i = 0; i < arraybuffer.byteLength; i++) {
    binaryString += String.fromCharCode(dv.getUint8(i));
  }
  return binaryToAscii(binaryString);
}
var KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function binaryToAscii(str) {
  let out = "";
  for (let i = 0; i < str.length; i += 3) {
    const groupsOfSix = [void 0, void 0, void 0, void 0];
    groupsOfSix[0] = str.charCodeAt(i) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i) & 3) << 4;
    if (str.length > i + 1) {
      groupsOfSix[1] |= str.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i + 1) & 15) << 2;
    }
    if (str.length > i + 2) {
      groupsOfSix[2] |= str.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i + 2) & 63;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j]];
      }
    }
  }
  return out;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify2(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  if (reducers) {
    for (const key3 of Object.getOwnPropertyNames(reducers)) {
      custom.push({ key: key3, fn: reducers[key3] });
    }
  }
  const keys2 = [];
  let p2 = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys2);
    }
    if (indexes.has(thing)) return indexes.get(thing);
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    const index12 = p2++;
    indexes.set(thing, index12);
    for (const { key: key3, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index12] = `["${key3}",${flatten(value2)}]`;
        return index12;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid2 = !isNaN(thing.getDate());
          str = `["Date","${valid2 ? thing.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: source2, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source2)},"${flags}"]` : `["RegExp",${stringify_string(source2)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0) str += ",";
            if (i in thing) {
              keys2.push(`[${i}]`);
              str += flatten(thing[i]);
              keys2.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key3, value2] of thing) {
            keys2.push(
              `.get(${is_primitive(key3) ? stringify_primitive2(key3) : "..."})`
            );
            str += `,${flatten(key3)},${flatten(value2)}`;
            keys2.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          const base642 = encode64(typedArray.buffer);
          str = '["' + type + '","' + base642 + '"]';
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base642 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base642}"]`;
          break;
        }
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys2
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys2
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key3 in thing) {
              keys2.push(stringify_key(key3));
              str += `,${stringify_string(key3)},${flatten(thing[key3])}`;
              keys2.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key3 in thing) {
              if (started) str += ",";
              started = true;
              keys2.push(stringify_key(key3));
              str += `${stringify_string(key3)}:${flatten(thing[key3])}`;
              keys2.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index12] = str;
    return index12;
  }
  const index11 = flatten(value);
  if (index11 < 0) return `${index11}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_exports2();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
var request_event = null;
var als;
import("node:async_hooks").then((hooks) => als = new hooks.AsyncLocalStorage()).catch(() => {
});
function with_event(event, fn) {
  try {
    request_event = event;
    return als ? als.run(event, fn) : fn();
  } finally {
    request_event = null;
  }
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {import('../exports/internal/index.js').Redirect | HttpError | SvelteKitError | Error} */
    error2
  );
}
function get_status(error2) {
  return error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : 500;
}
function get_message(error2) {
  return error2 instanceof SvelteKitError ? error2.text : "Internal Error";
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
  // Svelte also escapes < because the escape function could be called inside a `noscript` there
  // https://github.com/sveltejs/svelte/security/advisories/GHSA-8266-84wp-wv5c
  // However, that doesn't apply in SvelteKit
};
var escape_html_dict = {
  "&": "&amp;",
  "<": "&lt;"
};
var surrogates = (
  // high surrogate without paired low surrogate
  "[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]"
);
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|` + surrogates,
  "g"
);
var escape_html_regex = new RegExp(
  `[${Object.keys(escape_html_dict).join("")}]|` + surrogates,
  "g"
);
function escape_html2(str, is_attr) {
  const dict = is_attr ? escape_html_attr_dict : escape_html_dict;
  const escaped_str = str.replace(is_attr ? escape_html_attr_regex : escape_html_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return escaped_str;
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod) allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page3 = options2.templates.error({ status, message: escape_html2(message) });
  return text(page3, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = get_status(error2);
  const body22 = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body22, {
      status
    });
  }
  return static_error_page(options2, status, body22.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  }
  const status = get_status(error2);
  const message = get_message(error2);
  return await with_event(
    event,
    () => options2.hooks.handleError({ error: error2, event, status, message })
  ) ?? { message };
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (${error2.path}). If you need to serialize/deserialize custom types, use transport hooks: https://svelte.dev/docs/kit/hooks#Universal-hooks-transport.`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function serialize_uses(node2) {
  const uses = {};
  if (node2.uses && node2.uses.dependencies.size > 0) {
    uses.dependencies = Array.from(node2.uses.dependencies);
  }
  if (node2.uses && node2.uses.search_params.size > 0) {
    uses.search_params = Array.from(node2.uses.search_params);
  }
  if (node2.uses && node2.uses.params.size > 0) {
    uses.params = Array.from(node2.uses.params);
  }
  if (node2.uses?.parent) uses.parent = 1;
  if (node2.uses?.route) uses.route = 1;
  if (node2.uses?.url) uses.url = 1;
  return uses;
}
function has_prerendered_path(manifest2, pathname) {
  return manifest2._.prerendered_routes.has(pathname) || pathname.at(-1) === "/" && manifest2._.prerendered_routes.has(pathname.slice(0, -1));
}
async function render_endpoint(event, mod, state2) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && !mod.HEAD && mod.GET) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state2.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state2.prerendering && !state2.prerendering.inside_reroute && !prerender) {
    if (state2.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await with_event(
      event,
      () => handler(
        /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
        event
      )
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state2.prerendering && (!state2.prerendering.inside_reroute || prerender)) {
      const cloned = new Response(response.clone().body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      cloned.headers.set("x-sveltekit-prerender", String(prerender));
      if (state2.prerendering.inside_reroute && prerender) {
        cloned.headers.set(
          "x-sveltekit-routeid",
          encodeURI(
            /** @type {string} */
            event.route.id
          )
        );
        state2.prerendering.dependencies.set(event.url.pathname, { response: cloned, body: null });
      } else {
        return cloned;
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return new Response(void 0, {
        status: e3.status,
        headers: { location: e3.location }
      });
    }
    throw e3;
  }
}
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
var DATA_SUFFIX = "/__data.json";
var HTML_DATA_SUFFIX = ".html__data.json";
function has_data_suffix2(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
function add_data_suffix2(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix2(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
var ROUTE_SUFFIX = "/__route.js";
function has_resolution_suffix2(pathname) {
  return pathname.endsWith(ROUTE_SUFFIX);
}
function add_resolution_suffix2(pathname) {
  return pathname.replace(/\/$/, "") + ROUTE_SUFFIX;
}
function strip_resolution_suffix2(pathname) {
  return pathname.slice(0, -ROUTE_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      `POST method not allowed. No form actions exist for ${"this page"}`
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: get_status(err)
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data \u2014 received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return with_event(event, () => action(event));
}
function uneval_action_response(data, route_id, transport) {
  const replacer = (thing) => {
    for (const key22 in transport) {
      const encoded = transport[key22].encode(thing);
      if (encoded) {
        return `app.decode('${key22}', ${uneval(encoded, replacer)})`;
      }
    }
  };
  return try_serialize(data, (value) => uneval(value, replacer), route_id);
}
function stringify_action_response(data, route_id, transport) {
  const encoders = Object.fromEntries(
    Object.entries(transport).map(([key22, value]) => [key22, value.encode])
  );
  return try_serialize(data, (value) => stringify2(value, encoders), route_id);
}
function try_serialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e3) {
    const error2 = (
      /** @type {any} */
      e3
    );
    if (data instanceof Response) {
      throw new Error(
        `Data returned from action inside ${route_id} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`
      );
    }
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "") message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function b64_encode(buffer) {
  if (globalThis.Buffer) {
    return Buffer.from(buffer).toString("base64");
  }
  const little_endian = new Uint8Array(new Uint16Array([1]).buffer)[0] > 0;
  return btoa(
    new TextDecoder(little_endian ? "utf-16le" : "utf-16be").decode(
      new Uint16Array(new Uint8Array(buffer))
    )
  );
}
function get_relative_path(from, to) {
  const from_parts = from.split(/[/\\]/);
  const to_parts = to.split(/[/\\]/);
  from_parts.pop();
  while (from_parts[0] === to_parts[0]) {
    from_parts.shift();
    to_parts.shift();
  }
  let i = from_parts.length;
  while (i--) from_parts[i] = "..";
  return from_parts.concat(to_parts).join("/");
}
async function load_server_data({ event, state: state2, node: node2, parent }) {
  if (!node2?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const load7 = node2.server.load;
  const slash = node2.server.trailingSlash;
  if (!load7) {
    return { type: "data", data: null, uses, slash };
  }
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state2.prerendering) {
    disable_search(url);
  }
  let done = false;
  const result = await with_event(
    event,
    () => load7.call(null, {
      ...event,
      fetch: (info, init2) => {
        const url2 = new URL(info instanceof Request ? info.url : info, event.url);
        if (DEV && done && !uses.dependencies.has(url2.href)) ;
        return event.fetch(info, init2);
      },
      /** @param {string[]} deps */
      depends: (...deps) => {
        for (const dep of deps) {
          const { href } = new URL(dep, event.url);
          if (DEV) ;
          uses.dependencies.add(href);
        }
      },
      params: new Proxy(event.params, {
        get: (target, key22) => {
          if (DEV && done && typeof key22 === "string" && !uses.params.has(key22)) ;
          if (is_tracking) {
            uses.params.add(key22);
          }
          return target[
            /** @type {string} */
            key22
          ];
        }
      }),
      parent: async () => {
        if (DEV && done && !uses.parent) ;
        if (is_tracking) {
          uses.parent = true;
        }
        return parent();
      },
      route: new Proxy(event.route, {
        get: (target, key22) => {
          if (DEV && done && typeof key22 === "string" && !uses.route) ;
          if (is_tracking) {
            uses.route = true;
          }
          return target[
            /** @type {'id'} */
            key22
          ];
        }
      }),
      url,
      untrack(fn) {
        is_tracking = false;
        try {
          return fn();
        } finally {
          is_tracking = true;
        }
      }
    })
  );
  done = true;
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash
  };
}
async function load_data({
  event,
  fetched,
  node: node2,
  parent,
  server_data_promise,
  state: state2,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node2?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node2.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state2, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent,
    untrack: (fn) => fn()
  });
  return result ?? null;
}
function create_universal_fetch(event, state2, fetched, csr, resolve_opts) {
  const universal_fetch = async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state2.prerendering) {
        dependency = { response, body: null };
        state2.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else if (url.protocol === "https:" || url.protocol === "http:") {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy2 = new Proxy(response, {
      get(response2, key22, _receiver) {
        async function push_fetched(body22, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body22,
            response: response2,
            is_b64
          });
        }
        if (key22 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(b64_encode(buffer), true);
            }
            return buffer;
          };
        }
        async function text22() {
          const body22 = await response2.text();
          if (!body22 || typeof body22 === "string") {
            await push_fetched(body22, false);
          }
          if (dependency) {
            dependency.body = body22;
          }
          return body22;
        }
        if (key22 === "text") {
          return text22;
        }
        if (key22 === "json") {
          return async () => {
            return JSON.parse(await text22());
          };
        }
        return Reflect.get(response2, key22, response2);
      }
    });
    if (csr) {
      const get2 = response.headers.get;
      response.headers.get = (key22) => {
        const lower = key22.toLowerCase();
        const value = get2.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy2;
  };
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i) hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i) hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var replacements2 = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements2).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering2 = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key22, value] of fetched.response.headers) {
    if (filter(key22, value)) {
      headers2[key22] = value;
    }
    if (key22 === "cache-control") cache_control = value;
    else if (key22 === "age") age = value;
    else if (key22 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements2[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url="${escape_html2(fetched.url, true)}"`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering2 && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c2 = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c2;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #script_src_needs_csp;
  /** @type {boolean} */
  #script_src_elem_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {boolean} */
  #style_src_needs_csp;
  /** @type {boolean} */
  #style_src_attr_needs_csp;
  /** @type {boolean} */
  #style_src_elem_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {import('types').Csp.Source[]} */
  #script_src;
  /** @type {import('types').Csp.Source[]} */
  #script_src_elem;
  /** @type {import('types').Csp.Source[]} */
  #style_src;
  /** @type {import('types').Csp.Source[]} */
  #style_src_attr;
  /** @type {import('types').Csp.Source[]} */
  #style_src_elem;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d = this.#directives;
    this.#script_src = [];
    this.#script_src_elem = [];
    this.#style_src = [];
    this.#style_src_attr = [];
    this.#style_src_elem = [];
    const effective_script_src = d["script-src"] || d["default-src"];
    const script_src_elem = d["script-src-elem"];
    const effective_style_src = d["style-src"] || d["default-src"];
    const style_src_attr = d["style-src-attr"];
    const style_src_elem = d["style-src-elem"];
    const needs_csp = (directive) => !!directive && !directive.some((value) => value === "unsafe-inline");
    this.#script_src_needs_csp = needs_csp(effective_script_src);
    this.#script_src_elem_needs_csp = needs_csp(script_src_elem);
    this.#style_src_needs_csp = needs_csp(effective_style_src);
    this.#style_src_attr_needs_csp = needs_csp(style_src_attr);
    this.#style_src_elem_needs_csp = needs_csp(style_src_elem);
    this.#script_needs_csp = this.#script_src_needs_csp || this.#script_src_elem_needs_csp;
    this.#style_needs_csp = this.#style_src_needs_csp || this.#style_src_attr_needs_csp || this.#style_src_elem_needs_csp;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  /** @param {string} content */
  add_script(content3) {
    if (!this.#script_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha256(content3)}` : `nonce-${this.#nonce}`;
    if (this.#script_src_needs_csp) {
      this.#script_src.push(source2);
    }
    if (this.#script_src_elem_needs_csp) {
      this.#script_src_elem.push(source2);
    }
  }
  /** @param {string} content */
  add_style(content3) {
    if (!this.#style_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha256(content3)}` : `nonce-${this.#nonce}`;
    if (this.#style_src_needs_csp) {
      this.#style_src.push(source2);
    }
    if (this.#style_src_attr_needs_csp) {
      this.#style_src_attr.push(source2);
    }
    if (this.#style_src_elem_needs_csp) {
      const sha256_empty_comment_hash = "sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d = this.#directives;
      if (d["style-src-elem"] && !d["style-src-elem"].includes(sha256_empty_comment_hash) && !this.#style_src_elem.includes(sha256_empty_comment_hash)) {
        this.#style_src_elem.push(sha256_empty_comment_hash);
      }
      if (source2 !== sha256_empty_comment_hash) {
        this.#style_src_elem.push(source2);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#style_src_attr.length > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...this.#style_src_attr
      ];
    }
    if (this.#style_src_elem.length > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...this.#style_src_elem
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    if (this.#script_src_elem.length > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...this.#script_src_elem
      ];
    }
    for (const key22 in directives) {
      if (is_meta && (key22 === "frame-ancestors" || key22 === "report-uri" || key22 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key22]
      );
      if (!value) continue;
      const directive = [key22];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content3 = this.get_header(true);
    if (!content3) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content="${escape_html2(content3, true)}">`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content3) {
    this.csp_provider.add_script(content3);
    this.report_only_provider.add_script(content3);
  }
  /** @param {string} content */
  add_style(content3) {
    this.csp_provider.add_style(content3);
    this.report_only_provider.add_style(content3);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r3) => {
    fulfil = f;
    reject = r3;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred2 = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred2[0].promise;
            if (!next.done) deferred2.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred2[deferred2.length - 1].fulfil({
        value,
        done: false
      });
      deferred2.push(defer());
    },
    done: () => {
      deferred2[deferred2.length - 1].fulfil({ done: true });
    }
  };
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s22) => s22).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
function generate_route_object(route, url, manifest2) {
  const { errors, layouts, leaf } = route;
  const nodes = [...errors, ...layouts.map((l) => l?.[1]), leaf[1]].filter((n2) => typeof n2 === "number").map((n2) => `'${n2}': () => ${create_client_import(manifest2._.client.nodes?.[n2], url)}`).join(",\n		");
  return [
    `{
	id: ${s(route.id)}`,
    `errors: ${s(route.errors)}`,
    `layouts: ${s(route.layouts)}`,
    `leaf: ${s(route.leaf)}`,
    `nodes: {
		${nodes}
	}
}`
  ].join(",\n	");
}
function create_client_import(import_path, url) {
  if (!import_path) return "Promise.resolve({})";
  if (import_path[0] === "/") {
    return `import('${import_path}')`;
  }
  if (assets !== "") {
    return `import('${assets}/${import_path}')`;
  }
  let path = get_relative_path(url.pathname, `${base}/${import_path}`);
  if (path[0] !== ".") path = `./${path}`;
  return `import('${path}')`;
}
async function resolve_route(resolved_path, url, manifest2) {
  if (!manifest2._.client.routes) {
    return text("Server-side route resolution disabled", { status: 400 });
  }
  let route = null;
  let params = {};
  const matchers = await manifest2._.matchers();
  for (const candidate of manifest2._.client.routes) {
    const match = candidate.pattern.exec(resolved_path);
    if (!match) continue;
    const matched = exec(match, candidate.params, matchers);
    if (matched) {
      route = candidate;
      params = decode_params(matched);
      break;
    }
  }
  return create_server_routing_response(route, params, url, manifest2).response;
}
function create_server_routing_response(route, params, url, manifest2) {
  const headers2 = new Headers({
    "content-type": "application/javascript; charset=utf-8"
  });
  if (route) {
    const csr_route = generate_route_object(route, url, manifest2);
    const body22 = `${create_css_import(route, url, manifest2)}
export const route = ${csr_route}; export const params = ${JSON.stringify(params)};`;
    return { response: text(body22, { headers: headers2 }), body: body22 };
  } else {
    return { response: text("", { headers: headers2 }), body: "" };
  }
}
function create_css_import(route, url, manifest2) {
  const { errors, layouts, leaf } = route;
  let css = "";
  for (const node2 of [...errors, ...layouts.map((l) => l?.[1]), leaf[1]]) {
    if (typeof node2 !== "number") continue;
    const node_css = manifest2._.client.css?.[node2];
    for (const css_path of node_css ?? []) {
      css += `'${assets || base}/${css_path}',`;
    }
  }
  if (!css) return "";
  return `${create_client_import(
    /** @type {string} */
    manifest2._.client.start,
    url
  )}.then(x => x.load_css([${css}]));`;
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch: branch2,
  fetched,
  options: options2,
  manifest: manifest2,
  state: state2,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state2.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets10 = new Set(client.stylesheets);
  const fonts10 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  {
    if (!state2.prerendering?.fallback) {
      const segments = event.url.pathname.slice(base.length).split("/").slice(2);
      base$1 = segments.map(() => "..").join("/") || ".";
      base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
      if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
        assets$1 = base$1;
      }
    } else if (options2.hash_routing) {
      base_expression = "new URL('.', location).pathname.slice(0, -1)";
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(
        branch2.map(({ node: node2 }) => {
          if (!node2.component) {
            throw new Error(`Missing +page.svelte component for route ${event.route.id}`);
          }
          return node2.component();
        })
      ),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch2.length; i += 1) {
      data2 = { ...data2, ...branch2[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    override({ base: base$1, assets: assets$1 });
    const render_opts = {
      context: /* @__PURE__ */ new Map([
        [
          "__request__",
          {
            page: props.page
          }
        ]
      ])
    };
    {
      try {
        rendered = options2.root.render(props, render_opts);
      } finally {
        reset();
      }
    }
    for (const { node: node2 } of branch2) {
      for (const url of node2.imports) modulepreloads.add(url);
      for (const url of node2.stylesheets) stylesheets10.add(url);
      for (const url of node2.fonts) fonts10.add(url);
      if (node2.inline_styles && !client.inline) {
        Object.entries(await node2.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head3 = "";
  let body22 = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state2.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  const style = client.inline ? client.inline?.style : Array.from(inline_styles.values()).join("\n");
  if (style) {
    const attributes = [];
    if (csp.style_needs_nonce) attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(style);
    head3 += `
	<style${attributes.join("")}>${style}</style>`;
  }
  for (const dep of stylesheets10) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head3 += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts10) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head3 += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch2.map((b) => b.server_data),
    csp,
    global
  );
  if (page_config.ssr && page_config.csr) {
    body22 += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state2.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const route = manifest2._.client.routes?.find((r3) => r3.id === event.route.id) ?? null;
    if (client.uses_env_dynamic_public && state2.prerendering) {
      modulepreloads.add(`${app_dir}/env.js`);
    }
    if (!client.inline) {
      const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
        (path) => resolve_opts.preload({ type: "js", path })
      );
      for (const path of included_modulepreloads) {
        link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (options2.preload_strategy !== "modulepreload") {
          head3 += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
        } else if (state2.prerendering) {
          head3 += `
		<link rel="modulepreload" href="${path}">`;
        }
      }
    }
    if (manifest2._.client.routes && state2.prerendering && !state2.prerendering.fallback) {
      const pathname = add_resolution_suffix2(event.url.pathname);
      state2.prerendering.dependencies.set(
        pathname,
        create_server_routing_response(route, event.params, new URL(pathname, event.url), manifest2)
      );
    }
    const blocks = [];
    const load_env_eagerly = client.uses_env_dynamic_public && state2.prerendering;
    const properties2 = [`base: ${base_expression}`];
    if (assets) {
      properties2.push(`assets: ${s(assets)}`);
    }
    if (client.uses_env_dynamic_public) {
      properties2.push(`env: ${load_env_eagerly ? "null" : s(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties2.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties2.push(`resolve: ({ id, data, error }) => {
							const try_to_resolve = () => {
								if (!deferred.has(id)) {
									setTimeout(try_to_resolve, 0);
									return;
								}
								const { fulfil, reject } = deferred.get(id);
								deferred.delete(id);
								if (error) reject(error);
								else fulfil(data);
							}
							try_to_resolve();
						}`);
    }
    blocks.push(`${global} = {
						${properties2.join(",\n						")}
					};`);
    const args = ["element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate2 = [
        `node_ids: [${branch2.map(({ node: node2 }) => node2.index).join(", ")}]`,
        `data: ${data}`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate2.push(`status: ${status}`);
      }
      if (manifest2._.client.routes) {
        if (route) {
          const stringified = generate_route_object(route, event.url, manifest2).replaceAll(
            "\n",
            "\n							"
          );
          hydrate2.push(`params: ${uneval(event.params)}`, `server_route: ${stringified}`);
        }
      } else if (options2.embedded) {
        hydrate2.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate2.join(`,
${indent}	`)}
${indent}}`);
    }
    const boot = client.inline ? `${client.inline.script}

					__sveltekit_${options2.version_hash}.app.start(${args.join(", ")});` : client.app ? `Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(app, ${args.join(", ")});
					});` : `import(${s(prefixed(client.start))}).then((app) => {
						app.start(${args.join(", ")})
					});`;
    if (load_env_eagerly) {
      blocks.push(`import(${s(`${base$1}/${app_dir}/env.js`)}).then(({ env }) => {
						${global}.env = env;

						${boot.replace(/\n/g, "\n	")}
					});`);
    } else {
      blocks.push(boot);
    }
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body22 += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state2.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state2.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state2.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head3 = http_equiv.join("\n") + head3;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers2.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head3 += rendered.head;
  const html8 = options2.templates.app({
    head: head3,
    body: body22,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: safe_public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html: html8,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller2) {
        controller2.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller2.enqueue(encoder$1.encode(chunk));
        }
        controller2.close();
      },
      type: "bytes"
    }),
    {
      headers: headers2
    }
  );
}
function get_data(event, options2, nodes, csp, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push: push3, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          const nonce = csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : "";
          push3(`<script${nonce}>${global}.resolve(${str})<\/script>
`);
          if (count === 0) done();
        }
      );
      return `${global}.defer(${id})`;
    } else {
      for (const key22 in options2.hooks.transport) {
        const encoded = options2.hooks.transport[key22].encode(thing);
        if (encoded) {
          return `app.decode('${key22}', ${uneval(encoded, replacer)})`;
        }
      }
    }
  }
  try {
    const strings = nodes.map((node2) => {
      if (!node2) return "null";
      const payload = { type: "data", data: node2.data, uses: serialize_uses(node2) };
      if (node2.slash) payload.slash = node2.slash;
      return uneval(payload, replacer);
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    e3.path = e3.path.slice(1);
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
var PageNodes = class {
  data;
  /**
   * @param {Array<import('types').SSRNode | undefined>} nodes
   */
  constructor(nodes) {
    this.data = nodes;
  }
  layouts() {
    return this.data.slice(0, -1);
  }
  page() {
    return this.data.at(-1);
  }
  validate() {
    for (const layout of this.layouts()) {
      if (layout) {
        validate_layout_server_exports(
          layout.server,
          /** @type {string} */
          layout.server_id
        );
        validate_layout_exports(
          layout.universal,
          /** @type {string} */
          layout.universal_id
        );
      }
    }
    const page3 = this.page();
    if (page3) {
      validate_page_server_exports(
        page3.server,
        /** @type {string} */
        page3.server_id
      );
      validate_page_exports(
        page3.universal,
        /** @type {string} */
        page3.universal_id
      );
    }
  }
  /**
   * @template {'prerender' | 'ssr' | 'csr' | 'trailingSlash'} Option
   * @param {Option} option
   * @returns {Value | undefined}
   */
  #get_option(option2) {
    return this.data.reduce(
      (value, node2) => {
        return node2?.universal?.[option2] ?? node2?.server?.[option2] ?? value;
      },
      /** @type {Value | undefined} */
      void 0
    );
  }
  csr() {
    return this.#get_option("csr") ?? true;
  }
  ssr() {
    return this.#get_option("ssr") ?? true;
  }
  prerender() {
    return this.#get_option("prerender") ?? false;
  }
  trailing_slash() {
    return this.#get_option("trailingSlash") ?? "never";
  }
  get_config() {
    let current = {};
    for (const node2 of this.data) {
      if (!node2?.universal?.config && !node2?.server?.config) continue;
      current = {
        ...current,
        // TODO: should we override the server config value with the universal value similar to other page options?
        ...node2?.universal?.config,
        ...node2?.server?.config
      };
    }
    return Object.keys(current).length ? current : void 0;
  }
  should_prerender_data() {
    return this.data.some(
      // prerender in case of trailingSlash because the client retrieves that value from the server
      (node2) => node2?.server?.load || node2?.server?.trailingSlash !== void 0
    );
  }
};
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state: state2,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch2 = [];
    const default_layout = await manifest2._.nodes[0]();
    const nodes = new PageNodes([default_layout]);
    const ssr = nodes.ssr();
    const csr = nodes.csr();
    if (ssr) {
      state2.error = true;
      const server_data_promise = load_server_data({
        event,
        state: state2,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state: state2,
        csr
      });
      branch2.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state: state2,
      page_config: {
        ssr,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch: branch2,
      fetched,
      event,
      resolve_opts
    });
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return redirect_response(e3.status, e3.location);
    }
    return static_error_page(
      options2,
      get_status(e3),
      (await handle_error_and_jsonify(event, options2, e3)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
var encoder2 = new TextEncoder();
async function render_data(event, route, options2, manifest2, state2, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node2 = n2 == void 0 ? n2 : await manifest2._.nodes[n2]();
          return load_server_data({
            event: new_event,
            state: state2,
            node: node2,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e3) {
          aborted = true;
          throw e3;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p2, i) => p2.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller2) {
          controller2.enqueue(encoder2.encode(data));
          for await (const chunk of chunks) {
            controller2.enqueue(encoder2.encode(chunk));
          }
          controller2.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push: push3, done } = create_async_iterator();
  const reducers = {
    ...Object.fromEntries(
      Object.entries(options2.hooks.transport).map(([key22, value]) => [key22, value.encode])
    ),
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key22 = "data";
        thing.catch(
          /** @param {any} e */
          async (e3) => {
            key22 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e3
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify2(value, reducers);
            } catch {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key22 = "error";
              str = stringify2(error2, reducers);
            }
            count -= 1;
            push3(`{"type":"chunk","id":${id},"${key22}":${str}}
`);
            if (count === 0) done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node2) => {
      if (!node2) return "null";
      if (node2.type === "error" || node2.type === "skip") {
        return JSON.stringify(node2);
      }
      return `{"type":"data","data":${stringify2(node2.data, reducers)},"uses":${JSON.stringify(
        serialize_uses(node2)
      )}${node2.slash ? `,"slash":${JSON.stringify(node2.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    e3.path = "data" + e3.path;
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
var MAX_DEPTH = 10;
async function render_page(event, page3, options2, manifest2, state2, nodes, resolve_opts) {
  if (state2.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node2 = await manifest2._.nodes[page3.leaf]();
    return handle_action_json_request(event, options2, node2?.server);
  }
  try {
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.page()
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender = nodes.prerender();
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state2.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state2.prerender_default = should_prerender;
    const should_prerender_data = nodes.should_prerender_data();
    const data_pathname = add_data_suffix2(event.url.pathname);
    const fetched = [];
    const ssr = nodes.ssr();
    const csr = nodes.csr();
    if (ssr === false && !(state2.prerendering && should_prerender_data)) {
      if (DEV && action_result && !event.request.headers.has("x-sveltekit-action")) ;
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state: state2,
        resolve_opts
      });
    }
    const branch2 = [];
    let load_error = null;
    const server_promises = nodes.data.map((node2, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node2 === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state: state2,
            node: node2,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.data.map((node2, i) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node: node2,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state: state2,
            csr
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    for (const p2 of server_promises) p2.catch(() => {
    });
    for (const p2 of load_promises) p2.catch(() => {
    });
    for (let i = 0; i < nodes.data.length; i += 1) {
      const node2 = nodes.data[i];
      if (node2) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch2.push({ node: node2, server_data, data });
        } catch (e3) {
          const err = normalize_error(e3);
          if (err instanceof Redirect) {
            if (state2.prerendering && should_prerender_data) {
              const body22 = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state2.prerendering.dependencies.set(data_pathname, {
                response: text(body22),
                body: body22
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page3.errors[i]) {
              const index11 = (
                /** @type {number} */
                page3.errors[i]
              );
              const node22 = await manifest2._.nodes[index11]();
              let j = i;
              while (!branch2[j]) j -= 1;
              const layouts = compact(branch2.slice(0, j + 1));
              const nodes2 = new PageNodes(layouts.map((layout) => layout.node));
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state: state2,
                resolve_opts,
                page_config: {
                  ssr: nodes2.ssr(),
                  csr: nodes2.csr()
                },
                status: status2,
                error: error2,
                branch: layouts.concat({
                  node: node22,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch2.push(null);
      }
    }
    if (state2.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch2.map((node2) => node2?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state2.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state: state2,
      resolve_opts,
      page_config: {
        csr,
        ssr
      },
      status,
      error: null,
      branch: ssr === false ? [] : compact(branch2),
      action_result,
      fetched
    });
  } catch (e3) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state: state2,
      status: 500,
      error: e3,
      resolve_opts
    });
  }
}
var INVALID_COOKIE_CHARACTER_REGEX = /[\x00-\x1F\x7F()<>@,;:"/[\]?={} \t]/;
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
function get_cookies(request, url) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  let normalized_url;
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    get(name, opts) {
      const c2 = new_cookies[name];
      if (c2 && domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
        return c2.value;
      }
      const req_cookies = (0, import_cookie.parse)(header, { decode: opts?.decode });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    getAll(opts) {
      const cookies2 = (0, import_cookie.parse)(header, { decode: opts?.decode });
      for (const c2 of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
          cookies2[c2.name] = c2.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name, value, options2) {
      const illegal_characters = name.match(INVALID_COOKIE_CHARACTER_REGEX);
      if (illegal_characters) {
        console.warn(
          `The cookie name "${name}" will be invalid in SvelteKit 3.0 as it contains ${illegal_characters.join(
            " and "
          )}. See RFC 2616 for more details https://datatracker.ietf.org/doc/html/rfc2616#section-2.2`
        );
      }
      validate_options(options2);
      set_internal(name, value, { ...defaults, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name, options2) {
      validate_options(options2);
      cookies.set(name, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        if (!normalized_url) {
          throw new Error("Cannot serialize cookies until after the route is determined");
        }
        path = resolve(normalized_url, path);
      }
      return (0, import_cookie.serialize)(name, value, { ...defaults, ...options2, path });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key22 in new_cookies) {
      const cookie = new_cookies[key22];
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  const internal_queue = [];
  function set_internal(name, value, options2) {
    if (!normalized_url) {
      internal_queue.push(() => set_internal(name, value, options2));
      return;
    }
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    new_cookies[name] = { name, value, options: { ...options2, path } };
  }
  function set_trailing_slash(trailing_slash) {
    normalized_url = normalize_path(url.pathname, trailing_slash);
    internal_queue.forEach((fn) => fn());
  }
  return { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash };
}
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix2(options2.path);
      headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, { ...options2, path }));
    }
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state: state2, get_cookie_header, set_internal }) {
  const server_fetch = async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename) || filename in manifest2._.server_assets;
        const is_asset_html = manifest2.assets.has(filename_html) || filename_html in manifest2._.server_assets;
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state2.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state2.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else if (read_implementation && file in manifest2._.server_assets) {
            const length = manifest2._.server_assets[file];
            const type = manifest2.mimeTypes[file.slice(file.lastIndexOf("."))];
            return new Response(read_implementation(file), {
              headers: {
                "Content-Length": "" + length,
                "Content-Type": type
              }
            });
          }
          return await fetch(request);
        }
        if (has_prerendered_path(manifest2, base + decoded)) {
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await internal_fetch(request, options2, manifest2, state2);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str, {
              decodeValues: false
            });
            const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
            set_internal(name, value, {
              path,
              encode: (value2) => value2,
              .../** @type {import('cookie').CookieSerializeOptions} */
              options3
            });
          }
        }
        return response;
      }
    });
  };
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
async function internal_fetch(request, options2, manifest2, state2) {
  if (request.signal) {
    if (request.signal.aborted) {
      throw new DOMException("The operation was aborted.", "AbortError");
    }
    let remove_abort_listener = () => {
    };
    const abort_promise = new Promise((_, reject) => {
      const on_abort = () => {
        reject(new DOMException("The operation was aborted.", "AbortError"));
      };
      request.signal.addEventListener("abort", on_abort, { once: true });
      remove_abort_listener = () => request.signal.removeEventListener("abort", on_abort);
    });
    const result = await Promise.race([
      respond(request, options2, manifest2, {
        ...state2,
        depth: state2.depth + 1
      }),
      abort_promise
    ]);
    remove_abort_listener();
    return result;
  } else {
    return await respond(request, options2, manifest2, {
      ...state2,
      depth: state2.depth + 1
    });
  }
}
var body;
var etag;
var headers;
function get_public_env(request) {
  body ??= `export const env=${JSON.stringify(public_env)}`;
  etag ??= `W/${Date.now()}`;
  headers ??= new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  });
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  return new Response(body, { headers });
}
var default_transform = ({ html: html8 }) => html8;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state2) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = new HttpError(
        403,
        `Cross-site ${request.method} form submissions are forbidden`
      );
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  if (options2.hash_routing && url.pathname !== base + "/" && url.pathname !== "/[fallback]") {
    return text("Not found", { status: 404 });
  }
  let invalidated_data_nodes;
  const is_route_resolution_request = has_resolution_suffix2(url.pathname);
  const is_data_request = has_data_suffix2(url.pathname);
  if (is_route_resolution_request) {
    url.pathname = strip_resolution_suffix2(url.pathname);
  } else if (is_data_request) {
    url.pathname = strip_data_suffix2(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node2) => node2 === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  const headers2 = {};
  const { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash } = get_cookies(
    request,
    url
  );
  const event = {
    cookies,
    // @ts-expect-error `fetch` needs to be created after the `event` itself
    fetch: null,
    getClientAddress: state2.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params: {},
    platform: state2.platform,
    request,
    route: { id: null },
    setHeaders: (new_headers) => {
      for (const key22 in new_headers) {
        const lower = key22.toLowerCase();
        const value = new_headers[key22];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          throw new Error(`"${key22}" header is already set`);
        } else {
          headers2[lower] = value;
          if (state2.prerendering && lower === "cache-control") {
            state2.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state2.depth > 0
  };
  event.fetch = create_fetch({
    event,
    options: options2,
    manifest: manifest2,
    state: state2,
    get_cookie_header,
    set_internal
  });
  if (state2.emulator?.platform) {
    event.platform = await state2.emulator.platform({
      config: {},
      prerender: !!state2.prerendering?.fallback
    });
  }
  let resolved_path;
  const prerendering_reroute_state = state2.prerendering?.inside_reroute;
  try {
    if (state2.prerendering) state2.prerendering.inside_reroute = true;
    resolved_path = await options2.hooks.reroute({ url: new URL(url), fetch: event.fetch }) ?? url.pathname;
  } catch {
    return text("Internal Server Error", {
      status: 500
    });
  } finally {
    if (state2.prerendering) state2.prerendering.inside_reroute = prerendering_reroute_state;
  }
  try {
    resolved_path = decode_pathname(resolved_path);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  if (resolved_path !== url.pathname && !state2.prerendering?.fallback && has_prerendered_path(manifest2, resolved_path)) {
    const url2 = new URL(request.url);
    url2.pathname = is_data_request ? add_data_suffix2(resolved_path) : is_route_resolution_request ? add_resolution_suffix2(resolved_path) : resolved_path;
    const response = await fetch(url2, request);
    const headers22 = new Headers(response.headers);
    if (headers22.has("content-encoding")) {
      headers22.delete("content-encoding");
      headers22.delete("content-length");
    }
    return new Response(response.body, {
      headers: headers22,
      status: response.status,
      statusText: response.statusText
    });
  }
  let route = null;
  if (base && !state2.prerendering?.fallback) {
    if (!resolved_path.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    resolved_path = resolved_path.slice(base.length) || "/";
  }
  if (is_route_resolution_request) {
    return resolve_route(resolved_path, new URL(request.url), manifest2);
  }
  if (resolved_path === `/${app_dir}/env.js`) {
    return get_public_env(request);
  }
  if (resolved_path.startsWith(`/${app_dir}`)) {
    const headers22 = new Headers();
    headers22.set("cache-control", "public, max-age=0, must-revalidate");
    return text("Not found", { status: 404, headers: headers22 });
  }
  if (!state2.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(resolved_path);
      if (!match) continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        event.route = { id: route.id };
        event.params = decode_params(matched);
        break;
      }
    }
  }
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  let trailing_slash = "never";
  try {
    const page_nodes = route?.page ? new PageNodes(await load_page_nodes(route.page, manifest2)) : void 0;
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (page_nodes) {
        if (DEV) ;
        trailing_slash = page_nodes.trailing_slash();
      } else if (route.endpoint) {
        const node2 = await route.endpoint();
        trailing_slash = node2.trailingSlash ?? "never";
        if (DEV) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash);
        if (normalized !== url.pathname && !state2.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state2.before_handle || state2.emulator?.platform) {
        let config = {};
        let prerender = false;
        if (route.endpoint) {
          const node2 = await route.endpoint();
          config = node2.config ?? config;
          prerender = node2.prerender ?? prerender;
        } else if (page_nodes) {
          config = page_nodes.get_config() ?? config;
          prerender = page_nodes.prerender();
        }
        if (state2.before_handle) {
          state2.before_handle(event, config, prerender);
        }
        if (state2.emulator?.platform) {
          event.platform = await state2.emulator.platform({ config, prerender });
        }
      }
    }
    set_trailing_slash(trailing_slash);
    if (state2.prerendering && !state2.prerendering.fallback && !state2.prerendering.inside_reroute) {
      disable_search(url);
    }
    const response = await with_event(
      event,
      () => options2.hooks.handle({
        event,
        resolve: (event2, opts) => (
          // counter-intuitively, we need to clear the event, so that it's not
          // e.g. accessible when loading modules needed to handle the request
          with_event(
            null,
            () => resolve2(event2, page_nodes, opts).then((response2) => {
              for (const key22 in headers2) {
                const value = headers2[key22];
                response2.headers.set(
                  key22,
                  /** @type {string} */
                  value
                );
              }
              add_cookies_to_headers(response2.headers, Object.values(new_cookies));
              if (state2.prerendering && event2.route.id !== null) {
                response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
              }
              return response2;
            })
          )
        )
      })
    );
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key22 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key22);
          if (value) headers22.set(key22, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e3) : route?.page && is_action_json_request(event) ? action_json_redirect(e3) : redirect_response(e3.status, e3.location);
      add_cookies_to_headers(response.headers, Object.values(new_cookies));
      return response;
    }
    return await handle_fatal_error(event, options2, e3);
  }
  async function resolve2(event2, page_nodes, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (options2.hash_routing || state2.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state: state2,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state2,
            invalidated_data_nodes,
            trailing_slash
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state2);
        } else if (route.page) {
          if (!page_nodes) {
            throw new Error("page_nodes not found. This should never happen");
          } else if (page_methods.has(method)) {
            response = await render_page(
              event2,
              route.page,
              options2,
              manifest2,
              state2,
              page_nodes,
              resolve_opts
            );
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node2 = await manifest2._.nodes[route.page.leaf]();
            if (node2?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("Route is neither page nor endpoint. This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state2.error && event2.isSubRequest) {
        const headers22 = new Headers(request.headers);
        headers22.set("x-sveltekit-error", "true");
        return await fetch(request, { headers: headers22 });
      }
      if (state2.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state2.depth === 0) {
        if (DEV && event2.url.pathname === "/.well-known/appspecific/com.chrome.devtools.json") ;
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state: state2,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state2.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e3) {
      return await handle_fatal_error(event2, options2, e3);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function load_page_nodes(page3, manifest2) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page3.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
    manifest2._.nodes[page3.leaf]()
  ]);
}
function filter_private_env(env2, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env2).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env2, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env2).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
function set_app(value) {
}
var prerender_env_handler = {
  get({ type }, prop) {
    throw new Error(
      `Cannot read values from $env/dynamic/${type} while prerendering (attempted to read env.${prop.toString()}). Use $env/static/${type} instead`
    );
  }
};
var init_promise;
var Server = class {
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('@sveltejs/kit').SSRManifest} */
  #manifest;
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    this.#options = options;
    this.#manifest = manifest2;
  }
  /**
   * @param {import('@sveltejs/kit').ServerInitOptions} opts
   */
  async init({ env: env2, read }) {
    const prefixes = {
      public_prefix: this.#options.env_public_prefix,
      private_prefix: this.#options.env_private_prefix
    };
    const private_env = filter_private_env(env2, prefixes);
    const public_env2 = filter_public_env(env2, prefixes);
    set_private_env(
      prerendering ? new Proxy({ type: "private" }, prerender_env_handler) : private_env
    );
    set_public_env(
      prerendering ? new Proxy({ type: "public" }, prerender_env_handler) : public_env2
    );
    set_safe_public_env(public_env2);
    if (read) {
      const wrapped_read = (file) => {
        const result = read(file);
        if (result instanceof ReadableStream) {
          return result;
        } else {
          return new ReadableStream({
            async start(controller2) {
              try {
                const stream = await Promise.resolve(result);
                if (!stream) {
                  controller2.close();
                  return;
                }
                const reader = stream.getReader();
                while (true) {
                  const { done, value } = await reader.read();
                  if (done) break;
                  controller2.enqueue(value);
                }
                controller2.close();
              } catch (error2) {
                controller2.error(error2);
              }
            }
          });
        }
      };
      set_read_implementation(wrapped_read);
    }
    await (init_promise ??= (async () => {
      try {
        const module = await get_hooks();
        this.#options.hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ status, error: error2 }) => console.error(status === 404 && /** @type {Error} */
          error2?.message || error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          reroute: module.reroute || (() => {
          }),
          transport: module.transport || {}
        };
        set_app({
          decoders: module.transport ? Object.fromEntries(Object.entries(module.transport).map(([k, v]) => [k, v.decode])) : {}
        });
        if (module.init) {
          await module.init();
        }
      } catch (error2) {
        {
          throw error2;
        }
      }
    })());
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
};

// .svelte-kit/cloudflare-tmp/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ??= value = fn();
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set(["file.svg", "globe.svg", "images/Score_buddies.png", "images/Score_buddies_versions.png", "images/balagh.png", "images/majedabusitta-svelte.png", "images/study-buddy.png", "next.svg", "vercel.svg", "window.svg"]),
    mimeTypes: { ".svg": "image/svg+xml", ".png": "image/png" },
    _: {
      client: { start: "_app/immutable/entry/start.BuuIubX1.js", app: "_app/immutable/entry/app.DyE9WprR.js", imports: ["_app/immutable/entry/start.BuuIubX1.js", "_app/immutable/chunks/mDb9_bB4.js", "_app/immutable/chunks/Cq5Sg4Pf.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/TMDQaXup.js", "_app/immutable/chunks/CUAHUuVc.js", "_app/immutable/entry/app.DyE9WprR.js", "_app/immutable/chunks/BmIPGj5X.js", "_app/immutable/chunks/TMDQaXup.js", "_app/immutable/chunks/NZTpNUN0.js", "_app/immutable/chunks/Cq5Sg4Pf.js", "_app/immutable/chunks/hGDXmQVd.js", "_app/immutable/chunks/B3WSMgp5.js", "_app/immutable/chunks/CUAHUuVc.js"], stylesheets: [], fonts: [], uses_env_dynamic_public: false },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4))),
        __memo(() => Promise.resolve().then(() => (init__5(), __exports5))),
        __memo(() => Promise.resolve().then(() => (init__6(), __exports6))),
        __memo(() => Promise.resolve().then(() => (init__7(), __exports7))),
        __memo(() => Promise.resolve().then(() => (init__8(), __exports8))),
        __memo(() => Promise.resolve().then(() => (init__9(), __exports9)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/about",
          pattern: /^\/about\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        },
        {
          id: "/blog",
          pattern: /^\/blog\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        },
        {
          id: "/blog/[slug]",
          pattern: /^\/blog\/([^/]+?)\/?$/,
          params: [{ "name": "slug", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 5 },
          endpoint: null
        },
        {
          id: "/contact",
          pattern: /^\/contact\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 6 },
          endpoint: null
        },
        {
          id: "/projects",
          pattern: /^\/projects\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 7 },
          endpoint: null
        },
        {
          id: "/resume",
          pattern: /^\/resume\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 8 },
          endpoint: null
        }
      ],
      prerendered_routes: /* @__PURE__ */ new Set([]),
      matchers: async () => {
        return {};
      },
      server_assets: {}
    }
  };
})();
var prerendered = /* @__PURE__ */ new Set([]);
var base_path = "";

// .svelte-kit/cloudflare-tmp/_worker.js
async function e(e3, t2) {
  let n2 = "string" != typeof t2 && "HEAD" === t2.method;
  n2 && (t2 = new Request(t2, { method: "GET" }));
  let r3 = await e3.match(t2);
  return n2 && r3 && (r3 = new Response(null, r3)), r3;
}
function t(e3, t2, n2, o2) {
  return ("string" == typeof t2 || "GET" === t2.method) && r2(n2) && (n2.headers.has("Set-Cookie") && (n2 = new Response(n2.body, n2)).headers.append("Cache-Control", "private=Set-Cookie"), o2.waitUntil(e3.put(t2, n2.clone()))), n2;
}
var n = /* @__PURE__ */ new Set([200, 203, 204, 300, 301, 404, 405, 410, 414, 501]);
function r2(e3) {
  if (!n.has(e3.status)) return false;
  if (~(e3.headers.get("Vary") || "").indexOf("*")) return false;
  let t2 = e3.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(t2);
}
function o(n2) {
  return async function(r3, o2) {
    let a = await e(n2, r3);
    if (a) return a;
    o2.defer((e3) => {
      t(n2, r3, e3, o2);
    });
  };
}
var s2 = caches.default;
var c = t.bind(0, s2);
var r22 = e.bind(0, s2);
var e2 = o.bind(0, s2);
var server = new Server(manifest);
var app_path = `/${manifest.appPath}`;
var immutable = `${app_path}/immutable/`;
var version_file = `${app_path}/version.json`;
var worker = {
  async fetch(req, env2, context2) {
    await server.init({ env: env2 });
    let pragma = req.headers.get("cache-control") || "";
    let res = !pragma.includes("no-cache") && await r22(req);
    if (res) return res;
    let { pathname, search: search2 } = new URL(req.url);
    try {
      pathname = decodeURIComponent(pathname);
    } catch {
    }
    const stripped_pathname = pathname.replace(/\/$/, "");
    let is_static_asset = false;
    const filename = stripped_pathname.slice(base_path.length + 1);
    if (filename) {
      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html") || filename in manifest._.server_assets || filename + "/index.html" in manifest._.server_assets;
    }
    let location = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";
    if (is_static_asset || prerendered.has(pathname) || pathname === version_file || pathname.startsWith(immutable)) {
      res = await env2.ASSETS.fetch(req);
    } else if (location && prerendered.has(location)) {
      if (search2) location += search2;
      res = new Response("", {
        status: 308,
        headers: {
          location
        }
      });
    } else {
      res = await server.respond(req, {
        // @ts-ignore
        platform: { env: env2, context: context2, caches, cf: req.cf },
        getClientAddress() {
          return req.headers.get("cf-connecting-ip");
        }
      });
    }
    pragma = res.headers.get("cache-control") || "";
    return pragma && res.status < 400 ? c(req, res, context2) : res;
  }
};
var worker_default = worker;
export {
  worker_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=_worker.js.map
