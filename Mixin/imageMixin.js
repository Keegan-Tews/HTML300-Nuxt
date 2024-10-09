export default {
  data: () => {
    return {
      borderVisible: false, // Add a border to the image and making it visible
    };
  },
  methods: {
    toggleBorder() {
      this.borderVisible = !this.borderVisible;
    },
  },
};
