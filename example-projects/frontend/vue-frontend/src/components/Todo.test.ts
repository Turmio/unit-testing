import { it, expect, describe } from "vitest";

import { mount } from "@vue/test-utils";
import Todo from "./Todo.vue";

describe("Todo Component", () => {
    
    it("mount", async () => {
        expect(Todo).toBeTruthy();
    
        const wrapper = mount(Todo, {
        props: {
            msg: "Todo",
        },
        });
        expect(wrapper.text()).toContain("Todo");
    });

    
    it("mount msg is not hard coded", async () => {
        expect(Todo).toBeTruthy();
    
        const wrapper = mount(Todo, {
        props: {
            msg: "something else",
        },
        });
        expect(wrapper.text()).not.toContain("Todo");
    });
});