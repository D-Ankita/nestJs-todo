"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueId = void 0;
const generateUniqueId = ({ prefix }) => {
    return prefix + "-" + Math.random().toString(36).substring(2);
};
exports.generateUniqueId = generateUniqueId;
//# sourceMappingURL=generateUniqueId.js.map